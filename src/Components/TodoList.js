import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, handleEdit, handleDelete }) => {
  return (
    <div>
      <ol>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
