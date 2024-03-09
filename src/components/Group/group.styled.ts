import styled from '@emotion/styled';
import { Icon } from '../Icon/Icon';
import { Theme } from '@emotion/react';

export const GroupHeader = styled('button')(
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

export const ListHeaderIcon = styled(Icon)({}, (props) => ({
  marginRight: props.theme.sizes.space.group.header,
}));

export const Text = styled('span')(
  {},
  (props: Theme & { isComplete: boolean }) => ({
    fontSize: props.theme.sizes.font.subheader,
    color: props.isComplete ? props.theme.colors.font.selected : 'inherit',
  })
);

export const Action = styled('div')(
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

export const Indicator = {
  height: '24px',
  width: '24px',
  padding: '9px 7px',
  marginLeft: '2px',
  color: '#000000',
};

export const Down = styled(Icon)({
  ...Indicator,
});

export const Up = styled(Icon)({
  ...Indicator,
  transform: 'rotate(180deg)',
});

export const Wrapper = styled('div')({}, (props) => ({
  borderBottom: `1px solid ${props.theme.colors.group.border}`,
  '&:last-of-type': {
    borderBottom: 'none',
  },
}));

export const TasksWrapper = styled('ul')({}, (props) => ({
  padding: props.theme.sizes.space.card,
}));
