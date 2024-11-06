package com.example.rest_jpa.repository;

import com.example.rest_jpa.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<ToDo,Integer> {
}
