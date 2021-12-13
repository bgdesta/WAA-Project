package edu.miu.WAAminimarket.controller;

import edu.miu.WAAminimarket.domain.User;
import edu.miu.WAAminimarket.repository.UserRepository;
import edu.miu.WAAminimarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/sellers/pending")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public List<User> getAllPendingSellers(){
        return userRepository.findAllPendingSellers("PENDING");
    }

}
