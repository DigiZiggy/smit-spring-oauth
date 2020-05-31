package com.smit.server.service;

import com.smit.server.model.User;
import com.smit.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service(value = "userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveOrUpdateUser(User user){
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long userId){
        userRepository.deleteById(userId);
    }

    @Override
    public User findByUsername(String username){
        return userRepository.findByUsername(username).orElse(null);
    }

    @Override
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public List<User> findAllUsers(){
        return userRepository.findAll();
    }
}
