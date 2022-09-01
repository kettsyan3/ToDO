import React from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from "./index.module.scss";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function MuiCheckbox({checked, onChange, todo}) {
    return (
        <div className={styles.MuiCheckbox}>
            <Checkbox
                {...label}
                color="default"
                checked={checked}
                onChange={(e) => onChange({
                    ...todo,
                    completed: e.target.checked
                })}
            />
        </div>
    );
}

export default MuiCheckbox;


