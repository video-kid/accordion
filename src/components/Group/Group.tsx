import type { task } from '../../types/task';
import { removeSpaces } from '../../utils/utils';
import Task from '../Task/Task';

type groupType = {
  name: string;
  tasks: Array<task>;
};

const Group = ({ name, tasks }: groupType) => {
  return (
    <div>
      <h3>
        <button
          id={`group-${removeSpaces(name)}`}
          aria-expanded='true'
          aria-controls={removeSpaces(name)}>
          [=]{name} Showv^
        </button>
      </h3>
      <div
        id={removeSpaces(name)}
        role='region'
        aria-labelledby={`group-${removeSpaces(name)}`}
        hidden={false}>
        <ul>
          {tasks.map(({ description, value, checked }) => (
            <li key={removeSpaces(description)}>
              <Task
                description={description}
                value={value}
                checked={checked}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Group;