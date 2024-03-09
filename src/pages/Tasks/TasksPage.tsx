import Card from '../../components/Card/Card';
import Group from '../../components/Group/Group';
import { removeSpaces } from '../../utils/utils';
import styled from '@emotion/styled';
import { TasksContext } from '../../context/tasksContext';
import { useContext } from 'react';
import { getProgressBarValue } from './utils';

const Page = styled('div')({}, (props) => ({
  backgroundColor: props.theme.colors.primary,
  color: props.theme.colors.font.primary,
  padding: '45px',
  display: 'flex',
  justifyContent: 'center',
}));

const TasksPage = () => {
  const { data, isLoading } = useContext(TasksContext);

  if (isLoading) return <Page>loading...</Page>;
  if (!data) return <Page>error</Page>;

  const progressBarValue = getProgressBarValue(data);

  console.log(data);

  return (
    <Page>
      <Card
        progress={progressBarValue}
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
