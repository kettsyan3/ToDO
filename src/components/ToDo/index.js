import React from "react";
import Input from "../UI/Input";
import MuiButton from "../UI/Button";

import styles from "./index.module.scss";

function ToDo({value, onChange, onClick, errorMessage}) {

    return (
        <div className={styles.ToDo}>
            <div className={styles.Title}>Task</div>
            <form className={styles.FormContainer}>
                <Input
                    className={styles.Input}
                    type="text"
                    inputProps={{
                        "aria-label": "Write here"
                    }}
                    onChange={onChange}
                    value={value}
                    helperText={errorMessage}
                    error={errorMessage.length >= 54}
                />

                <div className={styles.Button} onClick={onClick}>
                    <MuiButton text="Add"/>
                </div>
            </form>
        </div>
    )
}

export default ToDo;