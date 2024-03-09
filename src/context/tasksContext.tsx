import { ReactNode, createContext } from 'react';
import type { group } from '../types/task';
import useSWR from 'swr';
import { api } from '../api/api';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const updatedTasks = (
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

export const TasksContext = createContext<{
  data: Array<group>;
  isLoading: boolean;
  updateTask: (groupName: string, description: string) => void;
}>({ data: [], isLoading: true, updateTask: () => null });

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const { data = [], isLoading, mutate } = useSWR<Array<group>>('/', fetcher);

  const updateTask = (groupName: string, description: string) =>
    mutate(updatedTasks(data, groupName, description), false);

  return (
    <TasksContext.Provider value={{ data, isLoading, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
