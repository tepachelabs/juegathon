import React from "react";
import styled from "@emotion/styled";

import {
  LIGHT_GREEN,
  PRIMARY_GREEN,
  PRIMARY_YELLOW,
  robotoMono,
  squadaOne,
} from "../../style-tokens";

interface TextBodyProps {
  lead?: boolean;
  bold?: boolean;
  noMargin?: boolean;
  condensed?: boolean;
  darker?: boolean;
  sm?: boolean;
}

export const H1 = styled.h1`
  ${squadaOne.style}
  font-size: 4rem;
`;

export const H2 = styled.h2`
  ${squadaOne.style}
  font-size: 3rem;
`;

export const H3 = styled.h3`
  ${squadaOne.style}
  font-size: 2rem;
`;

export const TextBody = styled.p<TextBodyProps>`
  ${robotoMono.style}

  color: ${({ darker, lead }) =>
    lead ? PRIMARY_YELLOW : darker ? PRIMARY_GREEN : LIGHT_GREEN};
  font-size: ${({ sm }) => (sm ? "1rem" : "1.25rem")};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  letter-spacing: ${({ condensed }) => (condensed ? "-2px" : "inherit")};
  margin: ${({ noMargin }) => (noMargin ? 0 : "inherit")};
`;
