import styled from '@emotion/styled';
import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';

const Wrapper = styled('li')(
  {
    listStyle: 'none',
  },
  (props) => ({
    padding: props.theme.sizes.space.card,
    marginBottom: '8px',
    '&:last-of-type': {
      marginBottom: '0',
    },
  })
);

const Task = ({ description, value, checked }: task) => {
  return (
    <Wrapper>
      <Icon name='check' />
      <input
        onChange={() => null}
        checked={checked}
        type='checkbox'
        id={removeSpaces(description)}
        name={removeSpaces(description)}
        value={value}
      />
      <label htmlFor={removeSpaces(description)}>{description}</label>
    </Wrapper>
  );
};

export default Task;
