import { addTask, deleteTask } from '../actionsTasks';
import { TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { deleteSelectTask, setSelectTask } from '../../selectedEntity/actionsSelects';
import { useSelector } from 'react-redux';
import { selectTasksId } from '../selectorTasks';
import { getId } from '../../../helpers/getUniqId';

export const collapsingTask = (tasks, markTasksId) => (dispatch) => {
  const tasksId = useSelector(selectTasksId);
  const newId = getId(tasksId);
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
