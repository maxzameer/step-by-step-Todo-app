package com.example.rest_jpa.controller;

import com.example.rest_jpa.model.ToDo;
import com.example.rest_jpa.service.TodoService;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;



@RestController
@RequestMapping("/todo")
@CrossOrigin("http://localhost:3000")
public class RestApiService {



    TodoService todoService;

    public RestApiService(TodoService todoService) {
        this.todoService = todoService;
    }


    @GetMapping("")
    public ArrayList<ToDo> gettodoList() {

        return (ArrayList<ToDo>) todoService.getAllTODO();
    }


    @PostMapping("/{create}")
    public ToDo create(@RequestBody ToDo todo){
        todoService.create(todo);
        return todo;
    }


    @GetMapping("/{id}")
    public ToDo gettodo(@PathVariable int id) {
       ToDo toDo =  todoService.getitem(id);
        return toDo ;
    }

    @PutMapping("/update/{id}")
    public String update(@PathVariable int id,@RequestBody ToDo updatedItem){
        return todoService.update(id,updatedItem);
    }
   

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        return todoService.delete(id);

    }



  }
