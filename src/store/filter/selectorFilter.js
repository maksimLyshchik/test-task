import { COMPLETED, IN_PROGRESS, REJECTED } from '../../common/constants/constantsTasks/constantsTasks';

export const selectFilter = store => store.filter;

export const selectCompletedTasks = store => Object.values(store.tasks).filter(item => item.status === COMPLETED);

export const selectRejectedTasks = store => Object.values(store.tasks).filter(item => item.status === REJECTED);

export const selectInProgressTasks = store => Object.values(store.tasks).filter(item => item.status === IN_PROGRESS);
