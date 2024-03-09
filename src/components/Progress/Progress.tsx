import { Background, Bar } from './progress.styled';

type progressProps = {
  name: string;
  value: number;
};

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
