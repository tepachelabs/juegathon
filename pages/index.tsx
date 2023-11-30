import React from "react";

import type {GetServerSideProps, InferGetServerSidePropsType} from 'next'

import {useRouter} from "next/router";
import {ThemeProvider} from "@emotion/react";
import {useFeatureFlagEnabled} from "posthog-js/react";

import {Contact, Faq, Hero, Page, PageMeta, Press, Schedule} from "../src/components";
import {LiveTemplate} from "../src/templates/live.template";
import PostHogClient from "../src/posthog";
import {getYearData, getYearTheme} from "../src/data/data";

const currentYear = new Date().getFullYear();

const generateMeta = (isLive: boolean) => {
  const meta: PageMeta = {
    title: isLive ? "Juegathon en Vivo" : `Juegathon ${currentYear}`,
    description: isLive
      ? "Ve el evento en directo"
      : "El mejor stream de caridad en el norte",
  };
  return meta;
};

interface HomeProps {
  theme: number;
}

export const getServerSideProps = (async (_context) => {
  const posthog = PostHogClient()
  const themeFeatureFlag = await posthog?.getFeatureFlagPayload('website-theme', 'web') as string ?? currentYear
  const theme = Number.isInteger(themeFeatureFlag) ? Number.parseInt(themeFeatureFlag) : currentYear
  return {
    props: {theme: theme}
  }
}) satisfies GetServerSideProps<HomeProps>

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {theme} = props;
  const router = useRouter();
  const {live} = router.query;
  const showTwitchIframe = useFeatureFlagEnabled('show-twitch-iframe');
  const isLive = Boolean(live) || showTwitchIframe || false;
  const meta = generateMeta(isLive);
  const {saturday, sunday} = getYearData(currentYear).schedules;

  const showSchedule = saturday.length > 0 && sunday.length > 0;
  const dateLabelText = "Status: Comprando las despensas";

  return (
    <ThemeProvider theme={getYearTheme(theme)}>
      <Page meta={meta}>
        {isLive ? <LiveTemplate/> :
          <Hero className="pt-4 mb-4" year={currentYear} dateLabel={dateLabelText}/>}
        {showSchedule && <Schedule className="my-5" saturday={saturday} sunday={sunday}/>}
        <Contact className="mt-5 pb-5"/>
        <Faq className="mt-5 pb-5"/>
        <Press className="mt-5 pb-5"/>
      </Page>
    </ThemeProvider>
  );
}
