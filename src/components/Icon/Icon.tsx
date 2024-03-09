import styled from '@emotion/styled';
import { iconLibraryProps, icons } from '../../assets/icons';

interface iconProps {
  name: string;
}

const SVG = styled.svg({
  color: 'inherit',
  display: 'inline-block',
  stroke: 'currentColor',
  fill: 'currentColor',
  height: '16px',
  width: '16px',
  resize: 'both',
});

const Icon = ({ name, ...props }: iconProps) => {
  return (
    <SVG
      viewBox='0 0 867 1024'
      height='16px'
      width='16px'
      xmlns='http://www.w3.org/2000/svg'
      className='icon'
      {...props}>
      <g>
        <path
          d={icons[name as keyof iconLibraryProps]}
          key={icons[name as keyof iconLibraryProps]}
        />
      </g>
    </SVG>
  );
};

export default Icon;
