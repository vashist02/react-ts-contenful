import React from 'react';
import './button.scss';

export interface IButtonProps {
  className?: 'primary' | 'secondary' | 'tertiary';
  copy?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  copy,
  disabled = false,
  onClick,
}: IButtonProps) => {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {copy}
    </button>
  );
};
