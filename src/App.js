import React, {useEffect, useState} from "react";
import MuiCheckbox from "./components/UI/Checkbox";
import ToDo from "./components/ToDo";
import ToDoList from "./components/ToDoList";
import Modal from "./components/UI/Modal";

import styles from "./App.module.scss";

const MAX_LENGTH = 54;
const getTodos =  JSON.parse(localStorage.getItem("todos"));

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");
    const [checked, setChecked] = useState(false);
    const [id, setId] = useState(null);
    const [state, setState] = useState({
        inputValue: "",
        todos: getTodos || []
    })

    const localStorage = window.localStorage;

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos))
    }, [state.todos])


    function handleChange(e) {
        const value = e.target.value;

        if (value.length >= MAX_LENGTH) {
            setErrorMessage("Task content can contain max 54 characters.");
            setState((prevState) => {

                return {
                    ...prevState,
                    inputValue: "",
                };
            });
        } else {
            setErrorMessage("");
            setState((prevState) => {

                return {
                    ...prevState,
                    inputValue: value,
                };
            });
    }}

    function handleDelete(id) {
        setState( prevState => {
            const todos = prevState.todos.filter((todo) => todo.id !== id);
            return {
                ...prevState,
                todos
            }
        })
        handleModalClose();
    }

    function handleAdd(text) {
        if (text !== "") {
        setState(prevState => {
            const todo = {
                title: text,
                id: Date.now(),
                completed: false
            }
            return ({
                inputValue: "",
                todos: [todo, ...prevState.todos],
            })
        })}
    }

    function handleModalClose() {
        setIsModalOpen(false);
    }

    function handleModalOpen(id) {

        setId(id);
        setIsModalOpen(true);
    }

    function handleChecked(newTodo) {
        setState(prevState => {
            const todos = state.todos.map(todo => {
                if (todo.id === newTodo.id) {
                    return newTodo
                }
                return todo;
            });
            return {
                ...prevState,
                todos
            }
        })
    }

    function handleHideCompleted() {
        setState( prevState => {
            const todos = prevState.todos.filter((todo) => !todo.completed);
            return {
                ...prevState,
                todos
            }
        })
        setChecked(true);
    }

  return (
    <div className={styles.App}>
        <div className={styles.Wrapper}>

            {state.todos.length > 0 &&
            <div className={styles.CompletedFrame}>
                <MuiCheckbox checked={checked} onChange={handleHideCompleted}/>
                <div className={styles.Text}>Hide completed</div>
            </div>
            }
        </div>

        <div className={styles.ToDo}>
            <ToDo
                errorMessage={errorMessage}
                value={state.inputValue}
                onChange={handleChange}
                onClick={() => handleAdd(state.inputValue)}
            />
        </div>

        <div className={styles.TodoList}>
            <ToDoList
                todos={state.todos}
                onClick={handleModalOpen}
                onChange={handleChecked}
            />
        </div>

        {!state.todos.length > 0 &&
        <div className={styles.TextWrapper}>
            <h2>Your life is a blank page. You write on it.</h2>
            <h1>So start by adding your tasks here.</h1>
        </div>}

        {isModalOpen &&
            <Modal
                onBackDropClick={handleModalClose}
                onModalClose={handleModalClose}
                onDelete={() => handleDelete(id)}
                id={id}
            />
        }
    </div>
  );
}

export default App;
