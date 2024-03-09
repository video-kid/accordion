import styled from '@emotion/styled';

type progressProps = {
  name: string;
  value: number;
};

const Background = styled('div')(
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

const Bar = styled('div')(
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

const Progress = ({ name, value }: progressProps) => {
  return (
    <Background
      role='progressbar'
      aria-labelledby={name}
      aria-valuenow={value}
      aria-busy={value !== 100}>
      <Bar aria-valuetext={value.toString()}>{value}%</Bar>
    </Background>
  );
};

export default Progress;
