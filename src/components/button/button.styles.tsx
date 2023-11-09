import styled from "@emotion/styled";

export const StyledButton = styled.a`
  --bs-btn-font-weight: 700;
  --bs-btn-color: ${({ theme }) => theme.color.background};
  --bs-btn-bg: ${({ theme }) => theme.color.primary};
  --bs-btn-border-color: ${({ theme }) => theme.color.primary};
  --bs-btn-hover-bg: transparent;
  --bs-btn-hover-border-color: ${({ theme }) => theme.color.primary};

  ${({ theme }) => theme.fonts.body}

  text-transform: uppercase;
`;

export const StyledSecondaryButton = styled.a`
  --bs-btn-font-weight: 700;
  --bs-btn-color: ${({ theme }) => theme.color.lightBackground};
  --bs-btn-bg: transparent;
  --bs-btn-border-color: ${({ theme }) => theme.color.lightBackground};
  --bs-btn-hover-color: ${({ theme }) => theme.color.background};
  --bs-btn-hover-bg: ${({ theme }) => theme.color.lightBackground};

  ${({ theme }) => theme.fonts.body}

  text-transform: uppercase;
`;
