package com.example.rest.model;

import java.util.Date;

public class ToDo {

    int id;
    String name;
    Date dueDate;
    String task;
   public String state;

    public ToDo(int id ,String name, Date date, String task,String state) {
        this.name = name;
        this.dueDate = date;
        this.task = task;
        this.id = id;
        this.state = state;
    }

    public String getName() {
        return name;
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
        this.state = state;

    }
}
