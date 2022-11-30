import React, { FC } from "react";

interface HeaderProps {
  children: React.ReactNode;
}

export const H1: FC<HeaderProps> = ({ children }) => {
  return <h1>{ children }</h1>;
}

export const H2: FC<HeaderProps> = ({ children }) => {
  return <h2>{ children }</h2>;
}
