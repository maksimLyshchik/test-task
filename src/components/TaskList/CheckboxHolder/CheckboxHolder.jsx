import React, {useState} from 'react';
import s from './CheckboxHolder.module.css'
import {useDispatch} from "react-redux";

function CheckboxHolder() {
    /*const [checkTask, setCheckTask] = useState();
    const dispatch = useDispatch();
    const handleClickCheckbox = event => {
        const { id, checked } = event.target;
        setCheckTask([...checkTask, id]);
        if (!checked) {
            setCheckTask(checkTask.filter(item => item !== id))
        }
    }*/


    return (<>
            <label className={s.checkboxHolder}><
                input type="checkbox"
                      /*handleClick={handleClickCheckbox}*//>All select</label>
            <label className={s.checkboxHolder}><input type="checkbox"/>All cancel</label>
            <label className={s.checkboxHolder}><input type="checkbox"/>All confirm</label>
        </>
    )
}

export default CheckboxHolder;