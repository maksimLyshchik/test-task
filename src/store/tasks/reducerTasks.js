import { ADD_TASK, COMPLETED_TASK, REJECTED_TASK, TODO_TASK } from './actionsTasks';

const addTask = (state, task) => {
  return {
    ...state,
    [task.id]: task,
  }
}

const rejectTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: 'rejected',
  }
  return {...state, [id]: newTask}
}

const completeTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: 'completed',
  }
  return {...state, [id]: newTask}
}

const todoTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: 'todo',
  }
  return {...state, [id]: newTask}
}

export const tasksReducer = (state = [], action) => {
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
