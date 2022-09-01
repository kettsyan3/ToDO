import React  from "react";
import MuiButton from "../Button";
import BackDrop from "../../BackDrop";

import styles from "./index.module.scss";

function Modal({onBackDropClick, onDelete, onModalClose, id}) {

    return (
            <>
                <div className={styles.Modal}>
                    <div className={styles.Text}>Are you sure you want to delete?</div>
                    <div className={styles.ButtonsContainer}>
                        <div className={styles.Button} onClick={() => onDelete(id)}>
                            <MuiButton text="Yes"  />
                        </div>
                        <div className={styles.Button} onClick={onModalClose}>
                            <MuiButton text="No" />
                        </div>
                    </div>
                </div>
                <BackDrop onClick={onBackDropClick} />
            </>
    );
}

export default Modal;
