import React, { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/actions';
import { getId } from '../../helpers/getUniqId';


function AddTask() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onSubmitTask = useCallback(() => {
    const {value} = inputRef?.current;

    dispatch(addTask({value, id: getId(), time: Date.now()}));
  }, [dispatch]);

  return (
    <div>
      <input ref={inputRef} placeholder="Enter task" />
      <button onClick={onSubmitTask}>Add</button>
    </div>
  );
}

export default AddTask;