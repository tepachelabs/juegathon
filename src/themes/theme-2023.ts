import { Theme } from "@emotion/react";
import { Roboto_Mono, Squada_One } from "@next/font/google";

export const robotoMono = Roboto_Mono({
  weight: "variable",
  subsets: ["latin"],
});

export const squadaOne = Squada_One({
  weight: "400",
  subsets: ["latin"],
});

export const theme2023: Theme = {
  color: {
    primary: '#F8D215',
    background: '#382663',
    lightBackground: '#FF8000'
  },
  fonts: {
    body: { ...robotoMono.style },
    heading: { ...squadaOne.style }
  },
  logo: {
    src: "/logo-2023.svg",
  }
}
