import React, { FC } from "react";

interface StreamProps {
  id: string;
  parent?: string;
}

export const Stream: FC<StreamProps> = ({ id, parent = 'juegathon.com' }) => {
  return (
    <iframe
      src={ `https://player.twitch.tv/?channel=${ id }&parent=${ parent }` }
      height="400"
      width="100%"
      allowFullScreen>
    </iframe>
  );
}
