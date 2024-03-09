import { ReactNode } from 'react';
import { removeSpaces } from '../../utils/utils';
import { Progress } from '../Progress/Progress';
import { Groups, Header, Heading, Wrapper } from './card.styled';

type cardProps = {
  title: string;
  progress: number;
  children: ReactNode;
};

const Card = ({ title, progress, children }: cardProps) => {
  return (
    <Wrapper>
      <Header>
        <Heading>{title}</Heading>
        <Progress
          name={removeSpaces(title)}
          value={progress}
        />
      </Header>
      <Groups>{children}</Groups>
    </Wrapper>
  );
};

export { Card };
