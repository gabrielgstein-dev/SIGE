import React from 'react';

import { InputProps } from './Input.interface';
import * as S from './Input.style';

export const Input: React.FC<InputProps> = ({ value, onChange, disabled, placeholder, label }) => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
  };
  return (
    <S.Container>
      {!!label && <S.LabelContainer>{label}</S.LabelContainer>}
      <S.Input
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </S.Container>
  );
};
