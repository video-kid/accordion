import { ReactNode } from 'react';
import { removeSpaces } from '../../utils/utils';
import Progress from '../Progress/Progress';

type cardProps = {
  title: string;
  progress: number;
  children: ReactNode;
};

const Card = ({ title, progress, children }: cardProps) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
        <Progress
          name={removeSpaces(title)}
          value={progress}
        />
      </header>
      {children}
    </div>
  );
};

export default Card;
