import React from 'react';
import { BigLogo } from '@atoms';
import { LoginBanner } from '@templates';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  const handleOnclick = () => {
    return 'Ta pronto';
  };
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
