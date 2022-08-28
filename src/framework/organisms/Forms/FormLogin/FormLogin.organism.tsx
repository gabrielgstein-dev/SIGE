import React from 'react';
import { FormContainer } from './FormLogin.style';
import { Button, Paragraph, Title } from '@atoms';
import { InputInLabel } from '@molecules';

import { FormLoginProps } from './FormLogin.interface';

export const FormLogin: React.FC<FormLoginProps> = ({
  onSubmit,
  action,
  title = "Entre ou cadastre-se",
  paragraph = "Digite seus dados cadastrais para realizar seu login",
  buttonLoginText = "Entrar",
  buttonRegisterText = "Cadastrar-se",
  buttonForgotPasswordText = "Esqueci a senha"
}) => {
  function handleChange() {
    console.log("oi hihi");
  }
  return (
    <FormContainer onSubmit={onSubmit} action={action}>
      <Title>{title}</Title>
      <Paragraph>{paragraph}</Paragraph>
      <div style={{marginTop: `40px`}}>
        <InputInLabel label="E-mail" onChange={handleChange} placeholder="Digite aqui" value="" style={{marginBottom: `16px`}} />
        <InputInLabel label="Senha" onChange={handleChange} placeholder="Digite aqui" value="" />
      </div>
      <div style={{margin: `40px 0`}}>
        <Button label={buttonLoginText} type="submit" onClick={handleChange} variant="primary" />
        <Button label={buttonRegisterText} onClick={handleChange} variant="secondary" style={{margin: `16px 0`}} />
        <Button label={buttonForgotPasswordText} onClick={handleChange} variant="text" />
      </div>
    </FormContainer>
  );
};
