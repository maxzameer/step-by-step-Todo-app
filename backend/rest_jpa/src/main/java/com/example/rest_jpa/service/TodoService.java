package com.example.rest_jpa.service;

import com.example.rest_jpa.model.ToDo;

import java.util.ArrayList;
import java.util.List;

public interface TodoService {

    public List<ToDo> getAllTODO();
    public String update(Integer id,ToDo toDo);
    public String delete(Integer id);
    public String create(ToDo toDo);
    public ToDo getitem(Integer id);

}
