package com.example.lab3.model1;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String location;

    @OneToMany(mappedBy = "department")
    private List<Employee> employees = new ArrayList<>();

    // Constructors, Getters, and Setters

    public Department() {}

    public Department(String name, String location) {
        this.name = name;
        this.location = location;
    }

    // getters and setters
}
