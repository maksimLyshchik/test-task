let prevId = 0;

export const getId = (tasksId) => {
  const maxTaskId = Math.max.apply(Math, tasksId);
  prevId = maxTaskId > 0 ? maxTaskId : prevId

  return ++prevId;
};
