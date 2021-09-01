import {
  ADD_TASK, addTask,
  COMPLETED_TASK,
  DELETE_TASK,
  REJECTED_TASK,
  SPLIT_TASK,
  TODO_TASK,
} from './actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../common/constants/constantsTasks/constantsTasks';
import { setSelectTask } from '../selectedEntity/actionsSelects';

const setTask = (state, task) => {
  return {
    ...state,
    [task.id]: task,
  };
};

const rejectTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: REJECTED,
    timeChange: Date.now(),
  };
  return {...state, [id]: newTask};
};

const completeTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: COMPLETED,
    timeChange: Date.now(),
  };
  return {...state, [id]: newTask};
};

const todoTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: IN_PROGRESS,
    timeChange: Date.now(),
  };
  return {...state, [id]: newTask};
};

const deleteTask = (state, id) => {
  const newState = {...state};
  delete newState[id];
  state = newState;
  return {
    ...state
  };
};

const splitTask = (state, tasks) => {
  return {
    ...state,
    [tasks.id]: {...tasks},
  };
};

export const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return setTask(state, action.payload);
    case REJECTED_TASK:
      return rejectTask(state, action.id);
    case COMPLETED_TASK:
      return completeTask(state, action.id);
    case TODO_TASK:
      return todoTask(state, action.id);
    case DELETE_TASK:
      return deleteTask(state, action.id);
    case SPLIT_TASK:
      return splitTask(state, action.payload);
    default:
      return state;
  }
};

export const addTaskThunkCreator = (task, tasksCount) => (dispatch) => {
  dispatch(addTask({
    value: task,
    id: ++tasksCount,
    timeCreation: Date.now(),
    status: TODO,
    timeChange: Date.now(),
  }));
  dispatch(setSelectTask({ [++tasksCount]: false }));
};
