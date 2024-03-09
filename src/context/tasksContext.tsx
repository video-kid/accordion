import { ReactNode, createContext } from 'react';
import type { group } from '../types/task';
import useSWR from 'swr';
import { api } from '../api/api';
import { getGroupByName, updatedTasks } from './utils';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

type taskContextProps = {
  data: Array<group>;
  isLoading: boolean;
  updateTask: (groupName: string, description: string) => void;
  getGroup: (name: string) => Array<group>;
};

const taskContextInitValues = {
  data: [],
  isLoading: true,
  updateTask: () => null,
  getGroup: () => [],
};

export const TasksContext = createContext<taskContextProps>(
  taskContextInitValues
);

const TasksProvider = ({ children }: { children: ReactNode }) => {
  const { data = [], isLoading, mutate } = useSWR<Array<group>>('/', fetcher);

  const updateTask = (groupName: string, description: string) =>
    mutate(updatedTasks(data, groupName, description), false);

  const getGroup = (name: string) => getGroupByName(data, name);

  return (
    <TasksContext.Provider value={{ data, isLoading, updateTask, getGroup }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
