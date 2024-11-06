package com.example.rest_jpa.implement;

import com.example.rest_jpa.model.ToDo;
import com.example.rest_jpa.repository.TodoRepository;
import com.example.rest_jpa.service.TodoService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class TodoImplements implements TodoService {

    TodoRepository todoRepository;

    public TodoImplements(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public List<ToDo> getAllTODO() {
        return todoRepository.findAll();
    }

    @Override
    public String update(Integer id,ToDo todo) {
        ToDo utoDo = todoRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found with id " + id));
        utoDo.setDueDate(todo.getDueDate());
        utoDo.setName(todo.getName());
        utoDo.setTask(todo.getTask());
        utoDo.setState(todo.getState());
        todoRepository.save(utoDo);
        return "success";
    }

    @Override
    public String delete(Integer id) {
        todoRepository.deleteById(id);
        return "Success";
    }

    @Override
    public String create(ToDo toDo) {
        todoRepository.save(toDo);
        return "Success";
    }

    @Override
    public ToDo getitem(Integer id) {

        Optional<ToDo> item = todoRepository.findById(id);
        return item.orElseThrow(() -> new RuntimeException("Item not found with ID: " + id));
    }


}
