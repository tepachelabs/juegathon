import { Theme } from "@emotion/react";
import { Roboto_Mono, Squada_One } from "next/font/google";

export const robotoMono = Roboto_Mono({
  weight: "variable",
  subsets: ["latin"],
});

export const squadaOne = Squada_One({
  weight: "400",
  subsets: ["latin"],
});

export const theme2022: Theme = {
  color: {
    primary: '#f8d31b',
    background: '#13493e',
    lightBackground: '#6eba6c'
  },
  fonts: {
    body: { ...robotoMono.style },
    heading: { ...squadaOne.style }
  },
  logo: {
    src: "/logo-2022.svg",
  }
}
