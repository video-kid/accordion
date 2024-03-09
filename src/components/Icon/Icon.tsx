import { iconLibraryProps, icons } from '../../assets/icons';
import { SVG } from './icon.styled';

interface iconProps {
  name: string;
}

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
