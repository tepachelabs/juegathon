import React from "react";
import { FiFacebook, FiInstagram, FiTwitch, FiYoutube } from "react-icons/fi";
import styled from "@emotion/styled";
import { TextBody } from "../typography";

export const Footer = () => {
  return (
    <div className="container">
      <StyledFooter className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4">
        <div className="col-md-4 d-flex align-items-center">
          <TextBody className="mb-3 mb-md-0" darker sm>
            © 2022 TepacheLabs
          </TextBody>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a href="https://www.instagram.com/batosjugando/">
              <svg className="bi" width="24" height="24">
                <FiInstagram />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.facebook.com/batosquejuegan">
              <svg className="bi" width="24" height="24">
                <FiFacebook />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.twitch.tv/juegathon">
              <svg className="bi" width="24" height="24">
                <FiTwitch />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a href="https://www.youtube.com/channel/UCU40Vk0baBrI998m5aGyZ2w">
              <svg className="bi" width="24" height="24">
                <FiYoutube />
              </svg>
            </a>
          </li>
        </ul>
      </StyledFooter>
    </div>
  );
};

const StyledFooter = styled.footer`
  color: #13493e;
  margin: 0 auto;
  max-width: 960px;
`;
