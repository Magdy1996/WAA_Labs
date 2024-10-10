package com.cs545.lab4.domain;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String appdate;
    @ManyToOne
    private Patient patient;
    @Embedded
    private Payment payment;
    @ManyToOne
    private Doctor doctor;
}
