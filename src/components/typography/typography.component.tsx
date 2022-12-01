import React, { FC } from "react";
import styled from "@emotion/styled";
import { Squada_One } from "@next/font/google";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const inter = Squada_One({
  weight: "400",
  subsets: ["latin"],
});

export const H1: FC<HeaderProps> = ({ children, className }) => (
  <_H1 className={`${inter.className} ${className}`}>{children}</_H1>
);

export const H2: FC<HeaderProps> = ({ children, className }) => (
  <_H2 className={`${inter.className} ${className}`}>{children}</_H2>
);

export const H3: FC<HeaderProps> = ({ children, className }) => (
  <_H3 className={`${inter.className} ${className}`}>{children}</_H3>
);

const _H1 = styled.h1`
  font-size: 4rem;
`;

const _H2 = styled.h2`
  font-size: 3rem;
`;

const _H3 = styled.h3`
  font-size: 2rem;
`;
