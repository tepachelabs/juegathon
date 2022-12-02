import styled from "@emotion/styled";
import { PRIMARY_YELLOW } from "../../style-tokens";

export const Entry = styled.div`
  position: relative;
`;

export const EntryData = styled.div`
  background-color: ${PRIMARY_YELLOW};
  padding: 1em 0.5em;
  position: relative;
  width: 100%;

  * {
    text-overflow: fade;
  }

  &:after {
    content: " ";
    bottom: 0;
    border-bottom: 4em solid ${PRIMARY_YELLOW};
    border-left: 1em solid ${PRIMARY_YELLOW};
    border-top: 4em solid transparent;
    border-right: 1em solid transparent;
    height: 100%;
    position: absolute;
    right: -2em;
    width: 2em;
  }

  @media (min-width: 576px) {
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
