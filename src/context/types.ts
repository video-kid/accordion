import type { group } from '../types/task';

export type taskContextProps = {
  data: Array<group>;
  isLoading: boolean;
  updateTask: (groupName: string, description: string) => void;
  getGroup: (name: string) => Array<group>;
};
