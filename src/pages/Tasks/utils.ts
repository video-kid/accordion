import type { group, task } from '../../types/task';
import { getCompletionPercentage } from '../../utils/utils';

export const getTasksValues = (tasks: Array<task>) =>
  tasks.map((task) => task.value);

export const getProgressBarValue = (array: Array<group>) => {
  const allTasks = array.flatMap((item) => item.tasks);
  const checkedTasks = array.flatMap((item) =>
    item.tasks.filter((task) => task.checked)
  );
  return getCompletionPercentage(
    getTasksValues(allTasks),
    getTasksValues(checkedTasks)
  );
};
