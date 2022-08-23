import styled, { css } from 'styled-components';
export const Input = styled.input`
  ${({ theme }) => css`
    ${theme.components.input}
    height: 50px;
    width: 100%;
    outline: 0;
  `}
`;
