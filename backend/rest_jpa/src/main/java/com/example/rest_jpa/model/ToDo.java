package com.example.rest_jpa.model;

import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name = "todo_info")
public class ToDo {



    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer id;
    String name;
    Date dueDate;
    String task;
    public String state;

    public ToDo() {
    }

    public ToDo(int id , String name, Date date, String task,String state) {
        this.name = name;
        this.dueDate = date;
        this.task = task;
        this.id = id;
        this.state = state;
    }

    public String getName() {
        return name;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getDueDate() {
        return dueDate;
    }

    public void setDueDate(Date dueDate) {
        this.dueDate = dueDate;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }



    public void changeState(String state) {
        state = state;

    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }
}
