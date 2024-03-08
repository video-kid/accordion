import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Icon from '../Icon/Icon';

const Task = ({ description, value, checked }: task) => {
  return (
    <div>
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
    </div>
  );
};

export default Task;
