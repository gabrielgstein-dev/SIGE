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

export interface ButtonProps extends React.Component<HTMLButtonElement>, ButtonInternalProps {
  onClick: () => void;
  label?: string;
  style?: React.CSSProperties;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
