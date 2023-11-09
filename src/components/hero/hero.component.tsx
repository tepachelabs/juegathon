import React, { FC } from "react";
import Image from "next/image";
import { useTheme } from "@emotion/react";

import { Button } from "../button";
import { H1, TextBody } from "../typography";

interface HeroProps {
  className?: string;
  year: number;
  dateLabel: string;
}

export const Hero: FC<HeroProps> = ({ className, dateLabel, year }) => {
  const { logo } = useTheme();

  return (
    <div className={ `row flex-sm-row-reverse align-items-center ${ className }` }>
      <div className="col-12 col-sm-6 mb-1">
        <Image
          src={ logo.src }
          className="d-block mx-sm-auto img-fluid"
          alt="Juegathon 2022"
          width="700"
          height="500"
          priority
        />
      </div>
      <div className="col-sm-6">
        <H1 className="lh-1 mb-3">Juegathon { year }</H1>
        <TextBody>
          El mejor stream de caridad en el norte. 24 horas de stream jugando
          videojuegos.
        </TextBody>
        <TextBody lead bold>
          { dateLabel }
        </TextBody>
        <div className="d-grid my-4 gap-3 d-md-flex justify-content-md-start">
          <Button
            className="btn-lg px-4 me-md-2"
            href="https://www.twitch.tv/juegathon"
          >
            Twitch
          </Button>
          <Button className="btn-lg px-4 me-md-2" href="#faq" secondary>
            Información
          </Button>
        </div>
      </div>
    </div>
  );
};
