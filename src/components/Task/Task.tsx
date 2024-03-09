import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';
import { useContext } from 'react';
import { TasksContext } from '../../context/tasksContext';
import { Label, Wrapper } from './task.styled';

type taskProps = task & { groupName: string };

const Task = ({ description, value, checked, groupName }: taskProps) => {
  const { updateTask } = useContext(TasksContext);

  const toggleCheckbox = () => updateTask(groupName, description);

  return (
    <Wrapper>
      <Label
        htmlFor={removeSpaces(description)}
        onChange={toggleCheckbox}>
        <input
          className='input'
          defaultChecked={checked}
          type='checkbox'
          id={removeSpaces(description)}
          name={removeSpaces(description)}
          value={value}
        />
        <Icon name='check' />
        {description}
      </Label>
    </Wrapper>
  );
};

export default Task;
