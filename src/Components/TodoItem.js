import React from "react";
import styles from "./todoItem.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const ToDoList = ({item, index, handleEdit, handleDelete}) => {

    return (
        <div className={styles.container}>
            <div>
            {index + 1} {item.text}
            </div>
            <div className={styles.action}>
                {/* <button >
                    <i class="fa-solid fa-square-check"></i>
                </button> */}
                <Button variant="warning" onClick={() => handleEdit(index)}>
                    <i class="fa-solid fa-pen-to-square"></i>
                </Button>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                    <i class="fa-solid fa-trash-can"></i>               
                </Button>
            </div>
        </div>
    );
};

export default ToDoList;