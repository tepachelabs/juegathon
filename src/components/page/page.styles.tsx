import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 2em 2em 0 0;
  color: ${({ theme }) => theme.color.primary};
  margin: 8px 8px 0;
  padding: 0 2em;
  width: auto;

  @media (min-width: 576px) {
    margin: 2em auto 0;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }
`;
