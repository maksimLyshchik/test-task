import { rejectedTask } from '../actionsTasks';
import { setSelectTask } from '../../selectedEntity/actionsSelects';

export const rejectingTask = (id) => (dispatch) => {
  dispatch(rejectedTask(id));
  dispatch(setSelectTask({ [id]: false }));
};
