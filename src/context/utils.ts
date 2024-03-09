import type { group } from '../types/task';

export const updatedTasks = (
  data: Array<group>,
  groupName: string,
  description: string
) =>
  data.map((group) => {
    if (group.name !== groupName) {
      return group;
    }
    return {
      ...group,
      tasks: group.tasks.map((task) => {
        if (task.description !== description) {
          return task;
        }
        return { ...task, checked: !task.checked };
      }),
    };
  });

export const getGroupByName = (allGroups: Array<group>, groupName: string) =>
  allGroups.filter(({ name }) => name === groupName);
