import { addTask } from '../actionsTasks';
import { TODO } from '../../../common/constants/constantsTasks/constantsTasks';
import { setSelectTask } from '../../selectedEntity/actionsSelects';

export const addingTask = (task, newId) => (dispatch) => {

  dispatch(addTask({
    value: task,
    id: newId,
    timeCreation: Date.now(),
    status: TODO,
    timeChange: null,
  }));

  dispatch(setSelectTask({ [newId]: false }));
};
