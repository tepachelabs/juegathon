import styled from "@emotion/styled";

export const Accordion = styled.div`
  --bs-accordion-bg: ${({ theme }) => theme.color.lightBackground};
  --bs-accordion-border-color: ${({ theme }) => theme.color.background};
  --bs-accordion-color: ${({ theme }) => theme.color.background};
  --bs-accordion-active-bg: ${({ theme }) => theme.color.primary};
  --bs-accordion-active-color: ${({ theme }) => theme.color.background};
  --bs-accordion-btn-color: ${({ theme }) => theme.color.background};
`;
