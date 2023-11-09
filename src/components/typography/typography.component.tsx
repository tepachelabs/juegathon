import styled from "@emotion/styled";

interface TextBodyProps {
  lead?: boolean;
  bold?: boolean;
  noMargin?: boolean;
  condensed?: boolean;
  darker?: boolean;
  sm?: boolean;
}

export const H1 = styled.h1`
  ${({ theme }) => theme.fonts.heading}
  font-size: 4rem;
`;

export const H2 = styled.h2`
  ${({ theme }) => theme.fonts.heading}
  font-size: 3rem;
`;

export const H3 = styled.h3`
  ${({ theme }) => theme.fonts.heading}
  font-size: 2rem;
`;

export const TextBody = styled.p<TextBodyProps>`
  ${({ theme }) => theme.fonts.body}

  color: ${ ({ theme, darker, lead }) =>
          lead ? theme.color.primary : darker ? theme.color.background : theme.color.lightBackground };
  font-size: ${ ({ sm }) => (sm ? "1rem" : "1.25rem") };
  font-weight: ${ ({ bold }) => (bold ? 700 : 400) };
  letter-spacing: ${ ({ condensed }) => (condensed ? "-2px" : "inherit") };
  margin: ${ ({ noMargin }) => (noMargin ? 0 : "inherit") };
`;
