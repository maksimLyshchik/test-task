import { ADD_TASK, COMPLETED_TASK, REJECTED_TASK, TODO_TASK } from './actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';

const addTask = (state, task) => {
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

export const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return addTask(state, action.payload);
    case REJECTED_TASK:
      return rejectTask(state, action.id);
    case COMPLETED_TASK:
      return completeTask(state, action.id);
    case TODO_TASK:
      return todoTask(state, action.id);
    default:
      return state;
  }
};
