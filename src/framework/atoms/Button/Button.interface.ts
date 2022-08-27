export enum VariantButtonEnum {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
  SMALL_PRIMARY = 'small-primary',
  SMALL_SECONDARY = 'small-secondary',
  SMALL_TEXT = 'small-text',
}
export type VariantType =
  | VariantButtonEnum.PRIMARY
  | VariantButtonEnum.SECONDARY
  | VariantButtonEnum.TEXT
  | VariantButtonEnum.SMALL_PRIMARY
  | VariantButtonEnum.SMALL_SECONDARY
  | VariantButtonEnum.SMALL_TEXT;

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
