import styled from '@emotion/styled';
import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';
import { useContext } from 'react';
import { TasksContext } from '../../context/tasksContext';

const Wrapper = styled('li')(
  {
    listStyle: 'none',
    marginBottom: '8px',
    '&:last-of-type': {
      marginBottom: '0',
    },
    '.input': {
      opacity: 0,
      height: '0',
      overflow: 'hidden',
      position: 'absolute',
      width: '0',
    },
  },
  (props) => ({
    '.input[checked] ~ .icon': {
      backgroundColor: props.theme.colors.font.selected,
      border: `1px solid var(--color-active)`,
    },
    '.input:focus-visible ~ .icon': {
      outlineOffset: '2px',
      outline: '#000000 auto 1px',
    },
    '.icon': {
      marginRight: props.theme.sizes.space.card,
      border: `1px solid var(--color-grey)`,
      borderRadius: '4px',
      height: '16px',
      width: '16px',
      padding: '2px',
      color: 'var(--color-white)',
    },
  })
);

const Label = styled('label')(
  {
    display: 'flex',
    alignItems: 'center',
  },
  (props) => ({
    padding: props.theme.sizes.space.card,
  })
);

type taskProps = task & { groupName: string };

const Task = ({ description, value, checked, groupName }: taskProps) => {
  const { updateTask } = useContext(TasksContext);

  const toggleTask = () => updateTask(groupName, description);

  return (
    <Wrapper>
      <Label
        htmlFor={removeSpaces(description)}
        onChange={toggleTask}>
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
