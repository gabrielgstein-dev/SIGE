import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.components.input}
    height: 50px;
    width: 100%;
    outline: 0;
  `}
`;

export const LabelContainer = styled.div`
  font-weight: 600;
`;
export const ErrorMessageContaienr = styled.div``;
