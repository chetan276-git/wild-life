import React from 'react';
import classNames from 'classnames';

type ButtonProps = {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  shape?: 'rounded' | 'square' | 'pill';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  shape = 'rounded',
  icon,
  iconPosition = 'left',
  onClick,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium focus:outline-none transition duration-150 hover:shadow-lg hover:opacity-85';

  const variantStyles = {
    primary: 'bg-gradient-primary text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border border-gray-600 text-gray-600 hover:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const shapeStyles = {
    rounded: 'rounded-md',
    square: '',
    pill: 'rounded-full',
  };

  const classes = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles[shape],
    { 'w-full': fullWidth }
  );

  return (
    <button className={classes} onClick={onClick}>
      {icon && iconPosition === 'left' && <span className='mr-2'>{icon}</span>}
      {text}
      {icon && iconPosition === 'right' && <span className='ml-2'>{icon}</span>}
    </button>
  );
};

export default Button;
