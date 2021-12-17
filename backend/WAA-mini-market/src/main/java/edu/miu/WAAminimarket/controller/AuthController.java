package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.ERole;
import edu.miu.WAAminimarket.domain.Role;
import edu.miu.WAAminimarket.domain.User;
import edu.miu.WAAminimarket.payload.request.LoginRequest;
import edu.miu.WAAminimarket.payload.request.SignupRequest;
import edu.miu.WAAminimarket.payload.response.JwtResponse;
import edu.miu.WAAminimarket.payload.response.MessageResponse;
import edu.miu.WAAminimarket.repository.RoleRepository;
import edu.miu.WAAminimarket.repository.UserRepository;
import edu.miu.WAAminimarket.security.jwt.JwtUtils;
import edu.miu.WAAminimarket.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt,
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getName(),
							 signUpRequest.getPhone(),
							 signUpRequest.getUsername(),
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		String role = signUpRequest.getRole();
		System.out.println("============================: " + role);
		if (role == null) {
			throw new RuntimeException("Error: Role is not found.");

		} else {
			switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Admin Error: Invalid Role."));

					user.setRole(adminRole);
					break;
				case "buyer":
					Role buyerRole = roleRepository.findByName(ERole.ROLE_BUYER)
							.orElseThrow(() -> new RuntimeException("Buyer Error: Invalid Role."));

					user.setRole(buyerRole);
					break;
				case "seller":
					Role sellerRole = roleRepository.findByName(ERole.ROLE_SELLER)
							.orElseThrow(() -> new RuntimeException("Seller Error: Invalid Role."));

					user.setRole(sellerRole);
					break;
				default:
					throw new RuntimeException("Default Error: Invalid  Role");
			}
		}
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
