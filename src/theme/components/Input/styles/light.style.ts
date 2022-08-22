import { css, FlattenSimpleInterpolation } from 'styled-components';
import { theme } from '@theme';

export const lightTheme: FlattenSimpleInterpolation = css`
  background-color: #f7f7f7;
  border-radius: 6px;
  padding: 8px 16px;
  border: none;

  color: ${theme.colors.black};
`;
