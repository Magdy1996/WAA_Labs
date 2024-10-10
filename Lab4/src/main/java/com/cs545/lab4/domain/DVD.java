package com.cs545.lab4.domain;

import jakarta.persistence.Entity;

@Entity
public class DVD extends Product {
    private String genre;
}
