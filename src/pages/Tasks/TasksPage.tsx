import useSWR from 'swr';
import type { group } from '../../types/task';
import Card from '../../components/Card/Card';
import Group from '../../components/Group/Group';
import { api } from '../../api/api';
import { removeSpaces } from '../../utils/utils';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const fetcher = (url: string) => api.get(url).then((res) => res.data);

const TasksPage = () => {
  const { data, isLoading } = useSWR<Array<group>>('/', fetcher);
  const theme = useTheme();

  const Page = styled('div')`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.font.primary};
  `;

  if (isLoading) return <Page>loading...</Page>;
  if (!data) return <Page>error</Page>;

  return (
    <Page>
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
    </Page>
  );
};

export { TasksPage };
