import React, { AnchorHTMLAttributes, FC } from "react";
import { StyledButton, StyledSecondaryButton } from "./button.styles";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}

export const Button: FC<ButtonProps & AnchorHTMLAttributes<any>> = ({
  children,
  className,
  secondary,
  ...rest
}) => {
  const Component = secondary ? StyledSecondaryButton : StyledButton;

  return (
    <Component type="button" className={`btn ${className}`} {...rest}>
      {children}
    </Component>
  );
};
