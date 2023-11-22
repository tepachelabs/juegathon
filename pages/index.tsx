import React from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@emotion/react";

import { Faq, Hero, Page, PageMeta, Press, Schedule } from "../src/components";
import { LiveTemplate } from "../src/templates/live.template";
import { fetchConfig } from "../src/remote-config";
import { theme2023 } from "../src/themes/theme-2023";
import data from "../src/data/schedule-2023.json";

const generateMeta = (isLive: boolean) => {
  const meta: PageMeta = {
    title: isLive ? "Juegathon en Vivo" : "Juegathon 2023",
    description: isLive
      ? "Ve el evento en directo"
      : "El mejor stream de caridad en el norte",
  };
  return meta;
};

export async function getServerSideProps() {
  const config = await fetchConfig();

  return {
    props: { config },
  };
}

export default function Home(props: any) {
  const { config } = props;
  const router = useRouter();
  const { live } = router.query;
  const meta = generateMeta(config.live);

  const { saturday, sunday } = data.schedules;

  return (
    <ThemeProvider theme={ theme2023 }>
      <Page meta={ meta }>
        { config.live || live ? <LiveTemplate/> :
          <Hero className="pt-4 mb-4" year={ 2023 } dateLabel="25 y 26 de Noviembre"/> }
        <Schedule className="my-5" saturday={ saturday } sunday={ sunday }/>
        <Faq className="mt-5 pb-5"/>
        <Press className="mt-5 pb-5"/>
      </Page>
    </ThemeProvider>
  );
}
