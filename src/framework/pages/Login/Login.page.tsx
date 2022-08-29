import React from 'react';
import { BigLogo } from '@atoms';
import { LoginBanner } from '@templates';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  return (
    <S.Container>
      <S.LeftSideContainer>
        <LoginBanner />
      </S.LeftSideContainer>
      <S.RightSide>
        <BigLogo />
      </S.RightSide>
    </S.Container>
  );
};
