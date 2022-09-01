import React from "react";
import MuiCheckbox from "../UI/Checkbox";
import CloseSvg from "../Icons/CloseSvg";

import styles from "./index.module.scss";

function ToDoItem({onClick, text, checked, onChange, todo}) {

    return (
        <div className={styles.ToDoItem}>
            <div className={styles.Content}>
                <div className={styles.Checkbox}>
                    <MuiCheckbox
                        onChange={onChange}
                        checked={checked}
                        todo={todo}
                    />
                </div>
                <div className={styles.Text}>{text}</div>
            </div>
            <div className={styles.Icon} onClick={onClick}>
                <CloseSvg />
            </div>
        </div>
    )
}

export default ToDoItem;