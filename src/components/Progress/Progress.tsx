type progressProps = {
  name: string;
  value: number;
};

const Progress = ({ name, value }: progressProps) => {
  return (
    <div
      role='progressbar'
      aria-labelledby={name}
      aria-valuenow={value}>
      {value}
    </div>
  );
};

export default Progress;
