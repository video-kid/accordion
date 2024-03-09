import styled from '@emotion/styled';
import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';
import Task from '../Task/Task';
import { useState } from 'react';

type groupType = {
  name: string;
  tasks: Array<task>;
};

const GroupHeader = styled('button')(
  {
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

const Text = styled('span')({}, (props) => ({
  fontSize: props.theme.sizes.font.subheader,
  // color: props.theme.colors.font.selected,
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
  padding: '7px',
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
}));

const TasksWrapper = styled('ul')({}, (props) => ({
  padding: props.theme.sizes.space.card,
}));

const Group = ({ name, tasks }: groupType) => {
  const [isHidden, setIsHidden] = useState<boolean>(true);
  return (
    <Wrapper>
      <GroupHeader
        id={`group-${removeSpaces(name)}`}
        aria-expanded='true'
        aria-controls={removeSpaces(name)}
        onClick={() => setIsHidden(!isHidden)}>
        <Text>
          <ListHeaderIcon name='list' />
          {/* <ListHeaderIcon name='list-done' /> */}
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
