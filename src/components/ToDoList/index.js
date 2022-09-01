import React from "react";
import ToDoItem from "../ToDoItem";
import Divider from "../Divider";

import styles from "./index.module.scss";

function ToDoList({todos, onClick, onChange}) {

    return (
        <div className={styles.ToDoList}>
            {todos.map(todo => {
                return (
                    <div className={styles.TodoItem} key={todo.id}>
                        <ToDoItem
                            checked={todo.completed}
                            onClick={() => onClick(todo.id)}
                            onChange={onChange}
                            text={todo.title}
                            todo={todo}
                      />
                      <div className={styles.Divider}>
                        <Divider />
                      </div>
                </div>)
          })}
        </div>
    )
}

export default ToDoList;