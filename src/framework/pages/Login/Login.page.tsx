import React from 'react';
import { FormLogin } from '@organisms';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  const handleOnclick = () => {
    return 'Ta pronto';
  };
  return (
    <S.Container>
      <S.LeftSide>
        <FormLogin />
      </S.LeftSide>
      <S.RightSide>s</S.RightSide>
    </S.Container>
  );
};
