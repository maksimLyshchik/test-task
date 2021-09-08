import { addTask } from '../actionsTasks';
import { TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { setSelectTask } from '../../selectedEntity/actionsSelects';
import { getId } from '../../../helpers/getUniqId';
import { useSelector } from 'react-redux';
import { selectTasksId } from '../selectorTasks';

export const addingTask = (task) => (dispatch) => {
  const tasksId = useSelector(selectTasksId);
  const newId = getId(tasksId);

  dispatch(addTask({
    value: task,
    id: newId,
    timeCreation: Date.now(),
    status: TODO,
    timeChange: null,
  }));

  dispatch(setSelectTask({ [newId]: false }));
};
