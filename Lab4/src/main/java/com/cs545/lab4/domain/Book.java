package com.cs545.lab4.domain;

import jakarta.persistence.Entity;

@Entity
public class Book extends Product {
    private String title;
}
