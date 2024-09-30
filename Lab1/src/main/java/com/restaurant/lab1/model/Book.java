package com.restaurant.lab1.model;

// a Book domain model which attributes: Id(int), title(string), isbn(string)


import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class Book {

    private int id ;
    private String title ;
    private String isbn ;
}
