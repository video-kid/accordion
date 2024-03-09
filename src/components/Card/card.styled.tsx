import styled from '@emotion/styled';

export const Wrapper = styled('div')(
  {
    borderRadius: '8px',
    width: 'min(100%, 820px)',
  },
  (props) => ({
    backgroundColor: props.theme.colors.card.primary,
    border: `1px solid ${props.theme.colors.card.border}`,
    padding: props.theme.sizes.space.card,
  })
);

export const Heading = styled('h1')(
  {
    margin: 0,
    fontWeight: 700,
    lineHeight: '32px',
  },
  (props) => ({
    fontSize: props.theme.sizes.font.header,
    marginBottom: props.theme.sizes.space.card,
  })
);

export const Header = styled('header')({
  padding: '32px 24px',
});

export const Groups = styled('div')(
  {
    borderRadius: '8px',
  },
  (props) => ({
    border: `1px solid ${props.theme.colors.group.border}`,
  })
);
