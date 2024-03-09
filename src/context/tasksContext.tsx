import { ReactNode, createContext } from 'react';
import type { group } from '../types/task';
import useSWR from 'swr';
import { api } from '../api/api';
import { getGroupByName, updatedTasks } from './utils';
import { taskContextProps } from './types';
import { taskContextInitValues } from './constants';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

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

export { TasksProvider };
