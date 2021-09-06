import { setSearchTasks } from '../actionsFilter';
import { debounce } from '../../../helpers/debounce';

export const setValueForTaskSearch = (value) => (dispatch) => {
  if (value.length > 2) {
    const dispatchValue = () => dispatch(setSearchTasks({ value }));

    const debounceDispatchValue = debounce(dispatchValue, 500);

    debounceDispatchValue();

    return;
  }

  const dispatchValue = () => dispatch(setSearchTasks({ value: '' }));

  const debounceDispatchValue = debounce(dispatchValue, 500);

  debounceDispatchValue();
};
