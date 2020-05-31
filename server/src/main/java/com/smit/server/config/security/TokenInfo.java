package com.smit.server.config.security;

import lombok.AllArgsConstructor;
import lombok.Value;

import java.util.List;
import java.util.stream.Collectors;

@Value
@AllArgsConstructor
public class TokenInfo {

    private String username;
    private List<String> roles;

    public TokenInfo(String username, String roles) {
        this.username = username;
        this.roles = List.of(roles.split(", "));
    }

    public String getRolesAsString() {
        return roles.stream().collect(Collectors.joining(", "));
    }

}
