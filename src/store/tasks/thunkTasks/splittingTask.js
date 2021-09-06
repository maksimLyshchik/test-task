import { deleteTask, splitTask } from '../actionsTasks';
import { deleteSelectTask, setSelectTask } from '../../selectedEntity/actionsSelects';

export const splittingTask = (tasks, markTasksId) => (dispatch) => {
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
