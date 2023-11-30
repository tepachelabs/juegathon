import React from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "@emotion/react";
import { useFeatureFlagEnabled, useFeatureFlagPayload } from "posthog-js/react";

import { Faq, Hero, Page, PageMeta, Press, Schedule } from "../src/components";
import { LiveTemplate } from "../src/templates/live.template";
import { theme2023 } from "../src/themes/theme-2023";
import data from "../src/data/schedule-2023.json";
import { theme2022 } from "../src/themes/theme-2022";

const generateMeta = (isLive: boolean) => {
  const meta: PageMeta = {
    title: isLive ? "Juegathon en Vivo" : "Juegathon 2023",
    description: isLive
      ? "Ve el evento en directo"
      : "El mejor stream de caridad en el norte",
  };
  return meta;
};

const getYearTheme = (year?: number) => {
  if (year === 2023) return theme2023;
  return theme2022;
}

export default function Home() {
  const router = useRouter();
  const { live } = router.query;
  const showTwitchIframe = useFeatureFlagEnabled('show-twitch-iframe');
  const websiteTheme = useFeatureFlagPayload('website-theme') as number;
  const isLive = Boolean(live) || showTwitchIframe || false;
  const meta = generateMeta(isLive);
  const { saturday, sunday } = data.schedules;

  return (
    <ThemeProvider theme={ getYearTheme(websiteTheme) }>
      <Page meta={ meta }>
        { isLive ? <LiveTemplate/> :
          <Hero className="pt-4 mb-4" year={ 2023 } dateLabel="25 y 26 de Noviembre"/> }
        <Schedule className="my-5" saturday={ saturday } sunday={ sunday }/>
        <Faq className="mt-5 pb-5"/>
        <Press className="mt-5 pb-5"/>
      </Page>
    </ThemeProvider>
  );
}
