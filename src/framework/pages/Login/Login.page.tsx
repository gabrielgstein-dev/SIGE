import React from 'react';
import { Input } from '@atoms';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  return (
    <S.Container>
      <S.LeftSide>
        <Input label='E-mail' value='Teste' onChange={() => console.log('change')} />
      </S.LeftSide>
      <S.RightSide>s</S.RightSide>
    </S.Container>
  );
};
