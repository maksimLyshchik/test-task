import {
  ADD_TASK, addTask,
  COMPLETED_TASK, completedTask,
  DELETE_TASK, deleteTask,
  REJECTED_TASK, rejectedTask,
  SPLIT_TASK, splitTask,
  TODO_TASK, todoTask,
} from './actionsTasks';
import { COMPLETED, IN_PROGRESS, REJECTED, TODO } from '../../common/constants/constantsTasks/constantsTasks';
import { deleteSelectTask, setSelectTask } from '../selectedEntity/actionsSelects';

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
  return { ...state, [id]: newTask };
};

const completeTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: COMPLETED,
    timeChange: Date.now(),
  };
  return { ...state, [id]: newTask };
};

const setTodoTask = (state, id) => {
  const newTask = {
    ...state[id],
    status: IN_PROGRESS,
    timeChange: Date.now(),
  };
  return { ...state, [id]: newTask };
};

const deletedTask = (state, id) => {
  const newState = { ...state };
  delete newState[id];
  state = newState;
  return {
    ...state,
  };
};

const splitedTask = (state, tasks) => {
  return {
    ...state,
    [tasks.id]: { ...tasks },
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
      return setTodoTask(state, action.id);
    case DELETE_TASK:
      return deletedTask(state, action.id);
    case SPLIT_TASK:
      return splitedTask(state, action.payload);
    default:
      return state;
  }
};

export const addTaskThunkCreator = (task, newId) => (dispatch) => {
  dispatch(addTask({
    value: task,
    id: newId,
    timeCreation: Date.now(),
    status: TODO,
    timeChange: null,
  }));
  dispatch(setSelectTask({ [newId]: false }));
};

export const completedTaskThunkCreator = (id) => (dispatch) => {
  dispatch(completedTask(id));
  dispatch(setSelectTask({ [id]: false }));
};

export const rejectedTaskThunkCreator = (id) => (dispatch) => {
  dispatch(rejectedTask(id));
  dispatch(setSelectTask({ [id]: false }));
};

export const todoTaskThunkCreator = (id) => (dispatch) => {
  dispatch(todoTask(id));
  dispatch(setSelectTask({ [id]: false }));
};

export const collapsedTaskThunkCreator = (tasks, markTasksId, newId) => (dispatch) => {
  const collapsedTasks = {};

  markTasksId.forEach(id => {
    const collapsedTask = {
      value: tasks[id].value,
      id: tasks[id].id,
    };

    return collapsedTasks[id] = collapsedTask;
  });

  dispatch(addTask({
    id: newId,
    timeCreation: Date.now(),
    status: TODO,
    timeChange: null,
    subtasks: collapsedTasks,
  }));
  dispatch(setSelectTask({ [newId]: false }));

  markTasksId.forEach((id) => {
    dispatch(deleteTask(id));
    dispatch(deleteSelectTask(id));
  });
};

export const splitTaskThunkCreator = (tasks, markTasksId) => (dispatch) => {
  markTasksId.forEach(id => {

    if (tasks[id].subtasks) {
      Object.values(tasks[id].subtasks).forEach((subtask) => {
        const restoredTask = {
          ...subtask,
          timeCreation: tasks[id].timeCreation,
          status: tasks[id].status,
          timeChange: Date.now(),
        };

        dispatch(splitTask({ ...restoredTask }));
        dispatch(deleteTask(id));
        dispatch(deleteSelectTask(id));
      });
    } else {
      dispatch(setSelectTask({ [id]: false }));
    }
  });
};
