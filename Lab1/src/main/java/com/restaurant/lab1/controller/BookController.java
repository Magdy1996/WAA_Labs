package com.restaurant.lab1.controller;

import com.restaurant.lab1.model.Book;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController {


    @GetMapping("books")
    public List<Book> getListOfBooks() {

        List<Book> myList = new ArrayList<Book>();

        myList.add(new Book(1, "Love Story", "123--1231"));
        myList.add(new Book(2, "1984", "234--2342"));
        myList.add(new Book(3, "To Kill a Mockingbird", "345--3453"));
        myList.add(new Book(4, "The Great Gatsby", "456--4564"));
        myList.add(new Book(5, "Moby Dick", "567--5675"));
        myList.add(new Book(6, "War and Peace", "678--6786"));
        myList.add(new Book(7, "Pride and Prejudice", "789--7897"));
        myList.add(new Book(8, "The Catcher in the Rye", "890--8908"));
        myList.add(new Book(9, "Brave New World", "901--9019"));
        myList.add(new Book(10, "The Alchemist", "012--0120"));
        return myList;
    }

}
