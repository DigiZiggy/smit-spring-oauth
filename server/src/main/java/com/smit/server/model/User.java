package com.smit.server.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String username;

    private String password;

    private String email;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(
            name = "roles",
            joinColumns=@JoinColumn(name = "user_id",
                    referencedColumnName = "id")
    )
    private List<Role> roles;

    @Transient
    private String token;

    protected User() {
    }
}
