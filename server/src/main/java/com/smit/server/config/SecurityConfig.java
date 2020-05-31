package com.smit.server.config;

import com.smit.server.config.security.ApiAuthenticationFilter;
import com.smit.server.config.security.handlers.ApiAccessDeniedHandler;
import com.smit.server.config.security.handlers.ApiEntryPoint;
import com.smit.server.config.security.handlers.ApiLogoutSuccessHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.web.authentication.logout.LogoutFilter;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors()
            .and().authorizeRequests()
            .antMatchers(HttpMethod.GET, "/api/v1/user/info", "/api/v1/exchange-rates-to-EUR/**")
                .hasAuthority("SCOPE_read")
            .antMatchers(HttpMethod.POST, "/api/v1/exchange-rates-to-EUR")
                .hasAuthority("SCOPE_write")
            .antMatchers(HttpMethod.DELETE, "/api/v1/exchange-rates-to-EUR/**")
                .hasAuthority("SCOPE_write")
            .antMatchers(HttpMethod.PUT, "/api/v1/exchange-rates-to-EUR/**")
                .hasAuthority("SCOPE_write")
            .anyRequest().authenticated()
            .and()
                .oauth2ResourceServer()
                    .jwt();
    }
}