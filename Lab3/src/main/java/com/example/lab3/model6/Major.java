package com.example.lab3.model6;

import jakarta.persistence.*;

@Entity
public class Major {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;

    @OneToOne(mappedBy = "major")
    private Student student;
}