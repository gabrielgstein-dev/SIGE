import React from 'react';
import { Button, Icons } from '@atoms';
import * as S from './Login.style';

export const LoginPage: React.FC = () => {
  const handleOnclick = () => {
    return 'Ta pronto';
  };
  return (
    <S.Container>
      <S.LeftSide>
        <Button label={'Aqui sim'} onClick={handleOnclick} rightIcon={<Icons.CheckIcon />} />
      </S.LeftSide>
      <S.RightSide>s</S.RightSide>
    </S.Container>
  );
};
