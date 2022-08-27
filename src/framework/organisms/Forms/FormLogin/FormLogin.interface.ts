export interface FormLoginProps {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    size?: number;
    title?: string;
    paragraph?: string;
    buttonLoginText?: string;
    buttonRegisterText?: string;
    buttonForgotPasswordText?: string;
    children?: React.ReactNode;
  }
  