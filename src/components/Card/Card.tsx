import { ReactNode } from 'react';
import { removeSpaces } from '../../utils/utils';
import Progress from '../Progress/Progress';
import styled from '@emotion/styled';

type cardProps = {
  title: string;
  progress: number;
  children: ReactNode;
};

const Wrapper = styled('div')(
  {
    'border-radius': '8px',
    width: '820px',
  },
  (props) => ({
    'background-color': props.theme.colors.card.primary,
    border: `1px solid ${props.theme.colors.card.border}`,
    padding: props.theme.sizes.space.card,
  })
);

const Heading = styled('h1')(
  {
    margin: 0,
    fontWeight: 700,
    lineHeight: '32px',
    margingBottom: '8px',
  },
  (props) => ({
    fontSize: props.theme.sizes.font.header,
  })
);

const Header = styled('header')({}, (props) => ({
  padding: '32px 24px',
}));

const Groups = styled('div')(
  {
    'border-radius': '8px',
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.group.border}`,
  })
);

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

export default Card;
