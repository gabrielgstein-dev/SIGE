import React from 'react';
import { BigLogo } from '@atoms';
import { LoginBanner } from '@templates';
import { useAuthentication } from '@hooks';
import * as S from './Login.style';
import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';

export const LoginPage: React.FC = () => {
  const authenticate = useAuthentication();
  const handleSubmitLoginForm = (value: RequestAuthUser) => {
    authenticate.login(value);
  };
  return (
    <S.Container>
      <S.LeftSideContainer>
        <LoginBanner submitLoginForm={handleSubmitLoginForm} />
      </S.LeftSideContainer>
      <S.RightSide>
        <BigLogo />
      </S.RightSide>
    </S.Container>
  );
};
