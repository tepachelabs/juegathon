import styled from "@emotion/styled";

export const Entry = styled.div`
  position: relative;
`;

export const EntryData = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  padding: 1em 0.5em;
  position: relative;
  width: 100%;

  * {
    text-overflow: fade;
  }

  .text-nowrap {
    overflow: hidden;
    text-overflow: ellipsis;
    width: 150px;

    @media (min-width: 420px) {
      width: auto;
    }
  }

  &:after {
    content: " ";
    bottom: 0;
    border-bottom: 4em solid ${({ theme }) => theme.color.primary};
    border-left: 1em solid ${({ theme }) => theme.color.primary};
    border-top: 4em solid transparent;
    border-right: 1em solid transparent;
    height: 100%;
    position: absolute;
    right: -2em;
    width: 2em;
  }

  @media (min-width: 576px) {
    max-width: initial;
    width: calc(100% - 2em);
  }
`;

export const EntryThumbnail = styled.img`
  height: 128px;
  width: 200px;
`;

export const EntryAvatar = styled.img`
  border-radius: 50%;
  height: 80px;
  position: absolute;
  right: 0;
  top: calc(50% - 40px);
  width: 80px;

  @media (min-width: 576px) {
    right: 0;
  }
`;
