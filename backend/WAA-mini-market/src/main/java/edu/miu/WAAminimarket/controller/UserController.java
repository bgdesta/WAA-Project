package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.User;
import edu.miu.WAAminimarket.repository.UserRepository;
import edu.miu.WAAminimarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/sellers/pending")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public List<User> getAllPendingSellers(){
        return userService.findAllPendingSellers("PENDING");
    }

    @PutMapping("/sellers/{id}")
    public User updateUser(@PathVariable Long id, User user){
        return userService.updateUser(id, user);
    }

}
