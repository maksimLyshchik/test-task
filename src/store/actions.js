export const ADD_TASK = 'ADD_TASK';
export const SET_SELECT_TASK = 'SET_SELECT_TASK';

export const addTask = (payload) => ({type: ADD_TASK, payload});
export const setSelectTask = (selects) => ({type: SET_SELECT_TASK, selects});
