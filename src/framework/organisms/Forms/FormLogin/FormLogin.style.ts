import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  ${({ }) => css`
    margin: auto 64px;

    h1, p {
        text-align: center;
    }
  `}
`;