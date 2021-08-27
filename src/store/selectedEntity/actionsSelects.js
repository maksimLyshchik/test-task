export const SET_SELECT_TASK = 'SET_SELECT_TASK';
export const DELETE_SELECT_TASK = 'DELETE_SELECT_TASK';

export const setSelectTask = (selects) => ({type: SET_SELECT_TASK, selects});

export const deleteSelectTask = (id) => ({type: DELETE_SELECT_TASK, id});
