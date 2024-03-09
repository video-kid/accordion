import styled from '@emotion/styled';

export const Background = styled('div')(
  {
    borderRadius: '16px',
    fontWeight: 500,
  },
  (props) => ({
    color: props.theme.progressBar.font,
    backgroundColor: props.theme.progressBar.background,
    height: props.theme.progressBar.height,
  })
);

export const Bar = styled('div')(
  {
    borderRadius: '16px',
    height: '100%',
    padding: '2px 16px 2px 0px',
    textAlign: 'right',
    lineHeight: '20px',
  },
  (props) => ({
    backgroundColor: props.theme.progressBar.indicator,
    width: `${props['aria-valuetext']}%`,
  })
);
