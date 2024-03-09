import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import { Task } from '../Task/Task';
import { useContext, useState } from 'react';
import { TasksContext } from '../../context/tasksContext';
import { getProgressBarValue } from '../../pages/Tasks/utils';
import {
  Action,
  Down,
  GroupHeader,
  ListHeaderIcon,
  Up,
  Wrapper,
  Text,
  TasksWrapper,
} from './group.styled';

type groupType = {
  name: string;
  tasks: Array<task>;
};

const Group = ({ name, tasks }: groupType) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  const { getGroup } = useContext(TasksContext);
  const isAllGroupTasksComplete = getProgressBarValue(getGroup(name)) === 100;

  return (
    <Wrapper>
      <GroupHeader
        id={`group-${removeSpaces(name)}`}
        aria-expanded='true'
        aria-controls={removeSpaces(name)}
        onClick={() => setIsHidden(!isHidden)}>
        <Text isComplete={isAllGroupTasksComplete}>
          {isAllGroupTasksComplete ? (
            <ListHeaderIcon name='list-done' />
          ) : (
            <ListHeaderIcon name='list' />
          )}
          {name}
        </Text>
        <Action>
          {isHidden ? (
            <>
              Show
              <Down name='arrow-down' />
            </>
          ) : (
            <>
              Hide
              <Up name='arrow-down' />
            </>
          )}
        </Action>
      </GroupHeader>
      <TasksWrapper
        id={removeSpaces(name)}
        role='region'
        aria-labelledby={`group-${removeSpaces(name)}`}
        hidden={isHidden}>
        {tasks.map(({ description, value, checked }) => (
          <Task
            description={description}
            value={value}
            checked={checked}
            groupName={name}
            key={removeSpaces(description)}
          />
        ))}
      </TasksWrapper>
    </Wrapper>
  );
};

export { Group };
