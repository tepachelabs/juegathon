import React from "react";
import { ThemeProvider } from "@emotion/react";

import { Faq, Hero, Page, PageMeta, Press, Schedule } from "../../src/components";
import { theme2022 } from "../../src/themes/theme-2022";
import data from "../../src/data/schedule-2022.json";

const meta: PageMeta = {
  title: "Juegathon 2022",
  description: "El mejor stream de caridad en el norte",
};

export default function Home() {
  const { saturday, sunday } = data.schedules;

  return (
    <ThemeProvider theme={ theme2022 }>
      <Page meta={ meta }>
        <Hero className="pt-4 mb-4" year={ 2022 } dateLabel="3 y 4 de Diciembre"/>
        <Schedule className="my-5" saturday={ saturday } sunday={ sunday }/>
        <Faq className="mt-5 pb-5"/>
        <Press className="mt-5 pb-5"/>
      </Page>
    </ThemeProvider>
  );
}
