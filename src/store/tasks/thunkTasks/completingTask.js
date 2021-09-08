import { completedTask } from '../actionsTasks';
import { setSelectTask } from '../../selectedEntity/actionsSelects';

export const completingTask = (id) => (dispatch) => {
  dispatch(completedTask(id));
  dispatch(setSelectTask({ [id]: false }));
};
