import useSWR from 'swr';
import type { group } from '../../types/task';
import Card from '../../components/Card/Card';
import Group from '../../components/Group/Group';
import { api } from '../../api/api';
import { removeSpaces } from '../../utils/utils';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const TasksPage = () => {
  const { data, isLoading } = useSWR<Array<group>>('/', fetcher);

  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>error</div>;

  return (
    <Card
      progress={15}
      title='Lodgify Grouped Tasks'>
      <>
        {data.map(({ tasks, name }) => (
          <Group
            name={name}
            tasks={tasks}
            key={removeSpaces(name)}
          />
        ))}
      </>
    </Card>
  );
};

export { TasksPage };
