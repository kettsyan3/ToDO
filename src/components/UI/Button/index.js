import React from 'react';
import Button from '@mui/material/Button';

import styles from "./index.module.scss";

function MuiButton({text}) {
    return (
        <div className={styles.MuiButton}>
            <Button variant="contained">{text}</Button>
        </div>
    );
}

export default MuiButton;