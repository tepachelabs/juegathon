import React from "react";
import styled from "@emotion/styled";
import {
  LIGHT_GREEN,
  PRIMARY_GREEN,
  PRIMARY_YELLOW,
  robotoMono,
} from "../../style-tokens";

export const StyledButton = styled.a`
  --bs-btn-font-weight: 700;
  --bs-btn-color: ${PRIMARY_GREEN};
  --bs-btn-bg: ${PRIMARY_YELLOW};
  --bs-btn-border-color: ${PRIMARY_YELLOW};
  --bs-btn-hover-bg: transparent;
  --bs-btn-hover-border-color: ${PRIMARY_YELLOW};

  ${robotoMono.style}

  text-transform: uppercase;
`;

export const StyledSecondaryButton = styled.a`
  --bs-btn-font-weight: 700;
  --bs-btn-color: ${LIGHT_GREEN};
  --bs-btn-bg: transparent;
  --bs-btn-border-color: ${LIGHT_GREEN};
  --bs-btn-hover-color: ${PRIMARY_GREEN};
  --bs-btn-hover-bg: ${LIGHT_GREEN};

  ${robotoMono.style}

  text-transform: uppercase;
`;
