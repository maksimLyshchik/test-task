import { ADD_TASK, COMPLETED_TASK, DELETE_TASK, REJECTED_TASK, TASKS_COLLAPSED, TODO_TASK } from './actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';
import { getId } from '../../helpers/getUniqId';

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

const collapsedTasks = (state, tasks) => {
  const idTasks = getId();
  return {
    ...state,
    [idTasks]: {...tasks},
  };
};

const deleteTask = (state, id) => {
  const newState = Object.assign({}, state);
  delete newState[id];
  state = newState;
  return {
    ...state
  };
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
    case DELETE_TASK:
      return deleteTask(state, action.id);
    case TASKS_COLLAPSED:
      return collapsedTasks(state, action.payload);
    default:
      return state;
  }
};
