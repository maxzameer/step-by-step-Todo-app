package com.example.rest.model;

import java.util.Date;

public class ToDo {

    int id;
    String name;
    Date dueDate;
    String task;
   public State state;

    public ToDo(int id ,String name, Date date, String task) {
        this.name = name;
        this.dueDate = date;
        this.task = task;
        this.id = id;
        state = State.pending;
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

    public State getState() {
        return state;
    }

    public void setState(State state) {
        this.state = state;
    }

    public void changeState() {
        state = State.completed;

    }
}
 enum State {
    completed,
    pending,

}