export enum VariantButtonEnum {
  PRIMARY = 'primary',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export type VariantType =
  | VariantButtonEnum.PRIMARY
  | VariantButtonEnum.OUTLINED
  | VariantButtonEnum.TEXT;

export interface ButtonInternalProps {
  variant?: VariantType;
  disabled?: boolean;
}

export interface ButtonProps extends ButtonInternalProps {
  onClick: () => void;
  label?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
