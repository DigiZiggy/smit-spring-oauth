package com.smit.server.config.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.smit.server.config.security.handlers.ApiAuthFailureHandler;
import com.smit.server.config.security.handlers.ApiAuthSuccessHandler;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ApiAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

    public ApiAuthenticationFilter(AuthenticationManager authenticationManager, String url) {
        super(url);

        setAuthenticationManager(authenticationManager);
        setAuthenticationSuccessHandler(new ApiAuthSuccessHandler());
        setAuthenticationFailureHandler(new ApiAuthFailureHandler());
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
                                                HttpServletResponse response) {

        LoginCredentials loginCredentials = new LoginCredentials();

        // Read info from HttpServletRequest.

        // Use ObjectMapper to convert Json to LoginCredentials object.

        // Info from LoginCredentials is used below.

        try {
            loginCredentials = new ObjectMapper().readValue(
                    request.getInputStream(), LoginCredentials.class);
        } catch (Exception e) {
            throw new BadCredentialsException("");
        }
        UsernamePasswordAuthenticationToken token =
                new UsernamePasswordAuthenticationToken(
                    loginCredentials.getUsername(),
                        loginCredentials.getPassword());

        return getAuthenticationManager().authenticate(token);
    }
}
