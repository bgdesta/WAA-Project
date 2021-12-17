package edu.miu.WAAminimarket.service;

import edu.miu.WAAminimarket.domain.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

   List<User> findAllPendingSellers(String status);

   User updateUser(Long id, User user);
   User registerUser(User user);
}
