import React, { FC } from "react";
import { Button } from "../button";
import { TextBody } from "../typography";

interface DonationsProps {
  className?: string;
}

const link = "https://paypal.me/juegathon";

export const Donations: FC<DonationsProps> = ({ className }) => {
  return (
    <div className={`row text-center ${className}`}>
      <div className="col d-flex flex-column flex-sm-row justify-content-md-center align-items-sm-center">
        <TextBody>Participa con nosotros:</TextBody>
        <Button
          className="btn-lg mt-2 mt-md-0 ms-sm-3"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Haz tu donación
        </Button>
      </div>
    </div>
  );
};
