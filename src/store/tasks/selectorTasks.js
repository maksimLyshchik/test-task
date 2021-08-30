export const selectTasks = store => Object.values(store.tasks);

export const selectTasksCount = store => Object.keys(store.tasks).length;

export const selectObjectTasks = store => store.tasks;
