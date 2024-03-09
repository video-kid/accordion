import type { taskContextProps } from './types';

export const taskContextInitValues: taskContextProps = {
  data: [],
  isLoading: true,
  updateTask: () => null,
  getGroup: () => [],
};
