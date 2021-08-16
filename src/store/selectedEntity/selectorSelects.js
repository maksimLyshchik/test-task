export const selectCheckedTask = store => store.selects;

export const selectMarkedTask = store => Object.entries(store.selects).filter(item => item[1] === true).map(item => item[0]);
