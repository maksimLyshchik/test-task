export const ADD_TASK = 'ADD_TASK';
export const REJECTED_TASK = 'REJECTED_TASK';
export const COMPLETED_TASK = 'COMPLETED_TASK';
export const TODO_TASK = 'TODO_TASK';

export const addTask = (payload) => ({type: ADD_TASK, payload});
export const rejectedTask = (id) => ({type: REJECTED_TASK, id});
export const completedTask = (id) => ({type: COMPLETED_TASK, id});
export const todoTask = (id) => ({type: TODO_TASK, id});
