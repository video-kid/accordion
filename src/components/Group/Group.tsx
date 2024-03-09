import styled from '@emotion/styled';
import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';
import Task from '../Task/Task';
import { useContext, useState } from 'react';
import { TasksContext } from '../../context/tasksContext';
import { getProgressBarValue } from '../../pages/Tasks/utils';
import { Theme } from '@emotion/react';

type groupType = {
  name: string;
  tasks: Array<task>;
};

const GroupHeader = styled('button')(
  {
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '76px',
    backgroundColor: 'unset',
    border: 'unset',
  },
  (props) => ({
    padding: props.theme.sizes.space.group.header,
  })
);

const ListHeaderIcon = styled(Icon)({}, (props) => ({
  marginRight: props.theme.sizes.space.group.header,
}));

const Text = styled('span')({}, (props: Theme & { isComplete: boolean }) => ({
  fontSize: props.theme.sizes.font.subheader,
  color: props.isComplete ? props.theme.colors.font.selected : 'inherit',
}));

const Action = styled('div')(
  {
    lineHeight: '24px',
    height: '24px',
    display: 'flex',
    cursor: 'pointer',
  },
  (props) => ({
    color: props.theme.colors.font.secondary,
  })
);

const Indicator = {
  height: '24px',
  width: '24px',
  padding: '9px 7px',
  marginLeft: '2px',
  color: '#000000',
};

const Down = styled(Icon)({
  ...Indicator,
});

const Up = styled(Icon)({
  ...Indicator,
  transform: 'rotate(180deg)',
});

const Wrapper = styled('div')({}, (props) => ({
  borderBottom: `1px solid ${props.theme.colors.group.border}`,
  '&:last-of-type': {
    borderBottom: 'none',
  },
}));

const TasksWrapper = styled('ul')({}, (props) => ({
  padding: props.theme.sizes.space.card,
}));

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

export default Group;
