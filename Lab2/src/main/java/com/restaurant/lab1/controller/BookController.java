package com.restaurant.lab1.controller;

import com.restaurant.lab1.model.Book;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/books")
public class BookController {

    private Map<Integer, Book> bookStore = new HashMap<>();
    private int currentId = 1 ;

    public BookController(){
        bookStore.put(currentId++, new Book(1, "Love Story", "123--1231", 10.99));
        bookStore.put(currentId++, new Book(2, "1984", "234--2342", 8.99));
        bookStore.put(currentId++, new Book(3, "To Kill a Mockingbird", "345--3453", 12.99));
        bookStore.put(currentId++, new Book(4, "The Great Gatsby", "456--4564", 14.99));
        bookStore.put(currentId++, new Book(5, "Moby Dick", "567--5675", 9.99));
    }



    //=====================================================================================
    //1. GET / books ---- return a list of books
    @GetMapping()
    public List<Book> getListOfBooks() {

        return new ArrayList<>(bookStore.values());

    }



    //=====================================================================================
    // 2. GET books/{id}  ----- return a single book by id

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id){

        Book book = bookStore.get(id);
        return book != null ? ResponseEntity.ok(book): ResponseEntity.notFound().build();

    }



    //=====================================================================================
    // 3. POST/ books   ------ add a new book
    @PostMapping
    public ResponseEntity<Book> addBook(@RequestBody Book book){
        book.setId(currentId);
        bookStore.put(currentId++, book);
        return ResponseEntity.status(HttpStatus.CREATED).body(book);
    }


    //=====================================================================================
    // 4. PUT/ books   ------ update a book by id
    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id , @RequestBody Book book){
        if(!bookStore.containsKey(id)){
            return ResponseEntity.notFound().build();
        }
        book.setId(id);
        bookStore.put(id, book);
        return ResponseEntity.ok(book);
    }

    //=====================================================================================
    // 5. Delete /books/{id}   ------ delete book by id
    @DeleteMapping("{id}")
    public  ResponseEntity<Book> deleteBook(@PathVariable int id){
        if(bookStore.remove(id) != null){
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.notFound().build();

    }




}
