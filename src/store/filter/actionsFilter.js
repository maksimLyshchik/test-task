export const SET_FILTER_TASKS = 'SET_FILTER_TASKS';
export const SET_SORTER_TASKS = 'SET_SORTER_TASKS';

export const setFilterTasks = (filter) => ({type: SET_FILTER_TASKS, filter});
export const setSorterTasks = (sorter) => ({type: SET_SORTER_TASKS, sorter});
