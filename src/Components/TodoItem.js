import React from "react";
import styles from './todoItem.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const TodoItem = ({ item, index, handleEdit, handleDelete }) => {
  return (
    <div className={styles.maindiv}>
    <table className={styles.mainTable}>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.itemText}>
              {index + 1} {item.text}
            </div>
           
          </td>
          <td>
            <Button onClick={() => handleEdit(index)} variant="outline-warning">
            <i class="fa-solid fa-pen-to-square"></i>
            </Button>
          </td>
          <td>
            <Button onClick={() => handleDelete(index)} variant="outline-danger">
            <i class="fa-solid fa-trash-can"></i>  
             </Button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default TodoItem;
