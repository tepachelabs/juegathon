import React from "react";
import {ThemeProvider} from "@emotion/react";

import {Faq, Hero, Page, PageMeta, Press, Schedule} from "../../src/components";
import {theme2023} from "../../src/themes/theme-2023";
import data from "../../src/data/schedule-2023.json";

const meta: PageMeta = {
  title: "Juegathon 2023",
  description: "El mejor stream de caridad en el norte",
};

export default function Home(_props: any) {
  const { saturday, sunday } = data.schedules;

  return (
    <ThemeProvider theme={ theme2023 }>
      <Page meta={meta}>
        <Hero className="pt-4 mb-4" year={ 2023 } dateLabel="25 y 26 de Noviembre"/>
        <Schedule className="my-5" saturday={ saturday } sunday={ sunday }/>
        <Faq className="mt-5 pb-5"/>
        <Press className="mt-5 pb-5"/>
      </Page>
    </ThemeProvider>
  );
}
