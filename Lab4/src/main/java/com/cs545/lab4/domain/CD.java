package com.cs545.lab4.domain;

import jakarta.persistence.Entity;

@Entity
public class CD extends Product {
    private String artist;
}
