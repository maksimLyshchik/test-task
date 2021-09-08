import { addTask, deleteTask } from '../actionsTasks';
import { TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { deleteSelectTask, setSelectTask } from '../../selectedEntity/actionsSelects';

export const collapsingTask = (tasks, markTasksId, newId) => (dispatch) => {
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
