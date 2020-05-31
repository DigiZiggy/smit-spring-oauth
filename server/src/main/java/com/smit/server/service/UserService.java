package com.smit.server.service;

import com.smit.server.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User saveOrUpdateUser(User user);

    void deleteUser(Long userId);

    User findByUsername(String username);

    Optional<User> findUserById(Long id);

    List<User> findAllUsers();
}
