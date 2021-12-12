package edu.miu.WAAminimarket.service.impl;

import edu.miu.WAAminimarket.domain.User;
import edu.miu.WAAminimarket.repository.UserRepository;
import edu.miu.WAAminimarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public  List<User> findAllPendingSellers(String status) {
        return userRepository.findAllPendingSellers(status);
    }
}
