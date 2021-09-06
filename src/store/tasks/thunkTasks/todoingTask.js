import { todoTask } from '../actionsTasks';
import { setSelectTask } from '../../selectedEntity/actionsSelects';

export const todoingTask = (id) => (dispatch) => {
  dispatch(todoTask(id));
  dispatch(setSelectTask({ [id]: false }));
};
