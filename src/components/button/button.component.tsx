import styled from "@emotion/styled";
import { AnchorHTMLAttributes, FC } from "react";
import { LIGHT_GREEN, PRIMARY_GREEN, PRIMARY_YELLOW } from "../../style-tokens";

const StyledButton = styled.a`
  --bs-btn-font-weight: 600;
  --bs-btn-color: ${PRIMARY_GREEN};
  --bs-btn-bg: ${PRIMARY_YELLOW};
  --bs-btn-border-color: ${PRIMARY_YELLOW};
  //--bs-btn-border-radius: 0.5rem;
  //--bs-btn-hover-color: var(--bd-violet-hover);
  --bs-btn-hover-bg: transparent;
  --bs-btn-hover-border-color: ${PRIMARY_YELLOW};
  //--bs-btn-focus-shadow-rgb: var(--bd-violet-hover);
  //--bs-btn-active-color: var(--bd-violet-active);
  //--bs-btn-active-bg: var(--bd-violet-active);
  //--bs-btn-active-border-color: var(--bd-violet-active);
`;

const StyledSecondaryButton = styled.a`
  --bs-btn-font-weight: 600;
  --bs-btn-color: ${LIGHT_GREEN};
  --bs-btn-bg: transparent;
  --bs-btn-border-color: ${LIGHT_GREEN};
  //--bs-btn-border-radius: 0.5rem;
  --bs-btn-hover-color: ${PRIMARY_GREEN};
  --bs-btn-hover-bg: ${LIGHT_GREEN};
  //--bs-btn-hover-border-color: LIGHT_GREEN;
  //--bs-btn-focus-shadow-rgb: var(--color-secondary-hover);
  //--bs-btn-active-color: var(--color-secondary-active);
  //--bs-btn-active-bg: var(--color-secondary-active);
  //--bs-btn-active-border-color: var(--color-secondary-active);
`;

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
