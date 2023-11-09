import styled from "@emotion/styled";

export const List = styled.ul`
  --bs-list-group-bg: ${({ theme }) => theme.color.lightBackground};
  --bs-list-group-action-hover-bg: ${({ theme }) => theme.color.primary};
`;
