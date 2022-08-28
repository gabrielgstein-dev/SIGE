import React from 'react';
import { FormLogin } from '@organisms';
import { RightContent } from '@organisms';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  const handleOnclick = () => {
    return 'Ta pronto';
  };
  return (
    <S.Container>
      <S.LeftSide>
        <div>
          <img src="/logo.svg" style={{ marginBottom: `44px`, width: `146.64px`, height: `166.17px` }} />
          <FormLogin />
        </div>
      </S.LeftSide>
      <S.RightSide>
        <div>
          <img src="/logo.svg" />
        </div>
      </S.RightSide>
    </S.Container>
  );
};
