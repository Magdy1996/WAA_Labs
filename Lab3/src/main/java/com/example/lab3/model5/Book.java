package com.example.lab3.model5;

import jakarta.persistence.*;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String isbn;

    @OneToOne
    @JoinColumn(name = "author_id")
    private Author author;
}
