import { ChangeEventHandler, ReactNode } from 'react';
import { Label, Wrapper } from '../Checkbox/checkbox.styled';
import { Icon } from '../Icon/Icon';

type checkboxProps = {
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  value: number;
  children: ReactNode;
};

const Checkbox = ({
  id,
  onChange,
  checked,
  value,
  children,
}: checkboxProps) => {
  return (
    <Wrapper>
      <Label>
        <input
          className='input'
          defaultChecked={checked}
          type='checkbox'
          id={id}
          name={id}
          value={value}
          onChange={onChange}
        />
        <Icon name='check' />
        {children}
      </Label>
    </Wrapper>
  );
};

export { Checkbox };
