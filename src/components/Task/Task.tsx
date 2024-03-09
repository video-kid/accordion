import styled from '@emotion/styled';
import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';

const Wrapper = styled('li')(
  {
    listStyle: 'none',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    '&:last-of-type': {
      marginBottom: '0',
    },
    '.input': {
      visibility: 'hidden',
      height: 0,
      width: 0,
      position: 'absolute',
    },
  },
  (props) => ({
    padding: props.theme.sizes.space.card,
    '.input[checked] ~ .icon': {
      backgroundColor: props.theme.colors.font.selected,
      border: `1px solid var(--color-active)`,
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

const Task = ({ description, value, checked }: task) => {
  return (
    <Wrapper>
      <input
        className='input'
        onChange={() => null}
        checked={checked}
        type='checkbox'
        id={removeSpaces(description)}
        name={removeSpaces(description)}
        value={value}
      />
      <Icon name='check' />
      <label htmlFor={removeSpaces(description)}>{description}</label>
    </Wrapper>
  );
};

export default Task;
