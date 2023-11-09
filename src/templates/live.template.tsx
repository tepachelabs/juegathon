import React from "react";
import Image from "next/image";
import { Donations, H1, Stream } from "../components";
import { useTheme } from "@emotion/react";

const twitchHost = "juegathon.com";

export const LiveTemplate = () => {
  const { logo } = useTheme();

  return (
    <>
      <div className="row align-items-center">
        <div className="col-12 mt-2 mb-1">
          <Image
            src={ logo.src }
            className="d-block mx-auto img-fluid"
            alt="Juegathon 2022"
            width="120"
            height="75"
            priority
          />
        </div>
      </div>
      <Stream id="juegathon" parent={twitchHost} />
      <div className="row">
        <div className="col-12">
          <H1 className="lh-1 mb-3">Juegathon 2023</H1>
        </div>
      </div>
      <Donations />
    </>
  );
};
