import { Card } from '../../components/Card/Card';
import { Group } from '../../components/Group/Group';
import { removeSpaces } from '../../utils/utils';
import { TasksContext } from '../../context/tasksContext';
import { useContext } from 'react';
import { getProgressBarValue } from './utils';
import { Page } from './tasksPage.styled';

const TasksPage = () => {
  const { data, isLoading } = useContext(TasksContext);

  if (isLoading) return <Page>loading...</Page>;
  if (!data) return <Page>error</Page>;

  return (
    <Page>
      <Card
        progress={getProgressBarValue(data)}
        title='Lodgify Grouped Tasks'>
        {data.map(({ tasks, name }) => (
          <Group
            name={name}
            tasks={tasks}
            key={removeSpaces(name)}
          />
        ))}
      </Card>
    </Page>
  );
};

export { TasksPage };
