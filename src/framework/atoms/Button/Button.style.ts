import styled, { css } from 'styled-components';
import { ButtonInternalProps, VariantType, VariantButtonEnum } from './Button.interface';

export const getVariant = (variant: VariantType) => {
  switch (variant) {
    case VariantButtonEnum.PRIMARY:
      return css`
        ${({ theme }) => css`
          color: ${theme.palette.light.tint};
          background-color: ${theme.palette.primary.base};
          box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
          border-radius: 20px;
          border: none;

          &:hover {
            background: ${theme.palette.primary.shade};
            box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
          }
        `}
      `;

    case VariantButtonEnum.SECONDARY:
      return css`
        ${({ theme }) => css`
          color: ${theme.palette.primary.base};
          background-color: ${theme.palette.light.tint};
          box-shadow: 0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);
          border-radius: 20px;
          border: 1px solid ${theme.palette.primary.base};
        `}
      `;
    
      case VariantButtonEnum.TEXT:
        return css`
          ${({ theme }) => css`
            background-color: ${theme.palette.light.tint};
            color: ${theme.palette.primary.base};
            border: none;

            &:hover {
              color: ${theme.palette.primary.shade};
            }
          `}
        `;

    default:
      break;
  }
};

export const Button = styled.button<ButtonInternalProps>`
  ${({ theme, variant = VariantButtonEnum.PRIMARY }) => css`
    ${getVariant(variant)}

    font-weight: 600;
    font-size: 15px;

    width: 100%;
    padding: 15px 0px;

    cursor: pointer;
  `}
`;

export const LeftIconContainer = styled.span`
  margin-right: 13px;
`;
export const RightIconContainer = styled.span`
  margin-left: 13px;
`;
