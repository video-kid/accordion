import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';

import { useContext } from 'react';
import { TasksContext } from '../../context/tasksContext';
import { Checkbox } from '../Checkbox/Checkbox';

type taskProps = task & { groupName: string };

const Task = ({ description, value, checked, groupName }: taskProps) => {
  const { updateTask } = useContext(TasksContext);

  const toggleCheckbox = () => updateTask(groupName, description);

  return (
    <Checkbox
      id={removeSpaces(description)}
      onChange={toggleCheckbox}
      checked={checked}
      value={value}>
      {description}
    </Checkbox>
  );
};

export { Task };
