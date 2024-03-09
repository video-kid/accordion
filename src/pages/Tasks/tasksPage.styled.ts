import styled from '@emotion/styled';

export const Page = styled('div')({}, (props) => ({
  backgroundColor: props.theme.colors.primary,
  color: props.theme.colors.font.primary,
  padding: '45px',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
}));
