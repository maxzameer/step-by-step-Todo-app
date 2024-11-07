package com.example.rest;



import com.example.rest.model.ToDo;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;



@RestController
@RequestMapping("/todo")
@CrossOrigin("http://localhost:3000")
public class RestApiService {

    int num = 0;
    ArrayList<ToDo> todoList = new ArrayList<>();

    @GetMapping("")
    public ArrayList<ToDo> gettodoList() {

        return todoList;
    }

    @GetMapping("add")
    public ArrayList<ToDo> add() {
        todoList.add(new ToDo(genid(),"aman", new Date(), "bake food","pending"));
        todoList.add(new ToDo(genid(),"amana", new Date(), "eat food","pending"));
        todoList.add(new ToDo(genid(),"amanat", new Date(), "eat food","pending"));
        return todoList;
    }




    @PostMapping("/{create}")
    public ArrayList<ToDo> update(@RequestBody ToDo updatedItem){
        updatedItem.setId(genid());
        todoList.add(updatedItem);
        return todoList;
    }


    @GetMapping("{name}")
    public ToDo gettodo(@PathVariable String name) {
        ToDo t = searchByName(todoList, name);
        return t;
    }

    @PutMapping("/update/{id}")
    public ToDo update(@PathVariable int id,@RequestBody ToDo updatedItem){
        int index =   todoList.indexOf(searchByid(todoList,id));
        todoList.set(index,updatedItem);
        return todoList.get(index);

    }



    @DeleteMapping("/delete/{id}")
    public ArrayList<ToDo> delete(@PathVariable int id){
        int index =   todoList.indexOf(searchByid(todoList,id));
        todoList.remove(index);
        return todoList;

    }


    public  ToDo searchByName(List<ToDo> items, String name) {
        for (ToDo item : items) {
            if (item.getName().equals(name)) {
                return item; // Return the item if found
            }
        }
        return null;
    }

    public  ToDo searchByid(List<ToDo> items, int id) {
        for (ToDo item : items) {
            if (item.getId() == id) {
                return item; // Return the item if found
            }
        }
        return null;
    }



    public int genid(){
        num++;
        return num;
    }
}
