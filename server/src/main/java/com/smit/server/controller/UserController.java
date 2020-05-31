package com.smit.server.controller;

import com.smit.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:8089")
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/info")
    public Map<String, Object> getUserInfo(@AuthenticationPrincipal Jwt principal) {
        return Collections.singletonMap("user_name", principal.getClaimAsString("preferred_username"));
    }

    @GetMapping("/user/{username}")
    public ResponseEntity<?> getUserRoles(@PathVariable String username) {
        return new ResponseEntity<>(userService.findByUsername(username), HttpStatus.OK);
    }
}
