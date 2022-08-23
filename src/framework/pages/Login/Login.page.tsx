import React from 'react';
import { Icons } from '@atoms';
import { InputSelect } from '@molecules';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  return (
    <S.Container>
      <S.LeftSide>
        <InputSelect value='Teste' onChange={() => console.log('change')} />
      </S.LeftSide>
      <S.RightSide>s</S.RightSide>
    </S.Container>
  );
};
