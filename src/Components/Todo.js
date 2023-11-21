import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import TodoList from "./TodoList";
import useTodo from "../hooks/useTodo";
import { Button } from "react-bootstrap";

const Todo = () => {
  const { register, handleSubmit, setValue, reset } = useForm();
  const {todoItems,editIndex,addTodo,updateTodo,deleteTodo,setEdit} = useTodo();

  const onSubmit = (data) => {
    //check item is being edited
    if (editIndex !== null) {
      // Update existing todo item
      updateTodo(editIndex, data.text);
    } else {
      // Add new todo item
      addTodo(data.text);
    }
    // Reset the form after handling submission 
    reset();
  };

  //when user wants to edit todoitem 
  const handleEdit = (index) => {
    setEdit(index);
    setValue("text", todoItems[index].text);
  };


  return (
    <div>
      <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col">
                <label className="form-label">
                  <input {...register("text", { required: true })} placeholder="Enter Todos..." />
                </label>
              </div>
              <div className="col">
                <Button type="submit" variant="outline-primary">
                  {editIndex !== null ? "Edit" : "ADD"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      <TodoList
        todoItems={todoItems}
        handleEdit={handleEdit}
        handleDelete={deleteTodo}
      />
    </div>
  );
};

export default Todo;
