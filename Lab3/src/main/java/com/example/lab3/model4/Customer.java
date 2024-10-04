package com.example.lab3.model4;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String contactNumber;

    @OneToMany
    @JoinColumn(name = "customer_id") // This avoids creating a join table
    private List<Reservation> reservations;
}