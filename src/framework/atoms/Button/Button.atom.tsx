import React from 'react';
import * as S from './Button.style';

import { ButtonProps } from './Button.interface';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  leftIcon,
  rightIcon,
  variant,
}) => {
  return (
    <S.Button disabled={disabled} onClick={onClick} variant={variant}>
      {leftIcon && <S.LeftIconContainer>{leftIcon}</S.LeftIconContainer>}
      {label}
      {rightIcon && <S.RightIconContainer>{rightIcon}</S.RightIconContainer>}
    </S.Button>
  );
};
