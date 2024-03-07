export type task = {
  description: string;
  value: number;
  checked: boolean;
};

export type group = {
  name: string;
  tasks: Array<task>;
};
