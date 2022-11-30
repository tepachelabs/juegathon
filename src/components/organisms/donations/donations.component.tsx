import React, { FC } from "react";
import { Container } from "./donations.styles";

interface DonationsProps {
}

export const Donations: FC<DonationsProps> = () => {
  return (
    <Container>
      <p>Donaciones</p>
    </Container>
  );
}
