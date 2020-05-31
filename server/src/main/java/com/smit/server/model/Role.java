package com.smit.server.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Embeddable
@Table(name = "roles")
public class Role {

    private String name;

    protected Role() {
    }
}
