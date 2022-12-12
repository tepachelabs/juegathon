import React, { FC } from "react";
import { H1, H2, TextBody } from "../typography";
import data from "./press.json";
import { List } from "./press.styles";

interface PressProps {
  className?: string;
}

export const Press: FC<PressProps> = ({ className }) => {
  const { press } = data;

  return (
    <div id="press" className={`row ${className}`}>
      <div className="col-12">
        <H1>Cobertura mediática</H1>
      </div>

      <div className="col-12 mb-3">
        <TextBody>
          Agradecemos a todos los medios que nos han dado cobertura. Es muy
          valioso para nosotros que otros nos conozcan. ¡Así es como la
          comunidad crece!
        </TextBody>
      </div>

      <div className="col">
        <List className="list-group list-group-flush">
          {press.map((link) => (
            <a
              key={link.id}
              className="list-group-item list-group-item-action"
              href={`${link.link}?utm_source=juegathon.com&utm_medium=link&utm_campaign=press`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TextBody darker>{link.title}</TextBody>
            </a>
          ))}
        </List>
      </div>
    </div>
  );
};
