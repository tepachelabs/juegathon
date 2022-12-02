import React from "react";
import { useRouter } from "next/router";

import { Page, PageMeta } from "../src/components";
import { LiveTemplate } from "../src/templates/live.template";
import { OffSeasonTemplate } from "../src/templates/off-season.template";

const isLive = false;

const meta: PageMeta = {
  title: isLive ? "Juegathon en Vivo" : "Juegathon 2022",
  description: isLive
    ? "Ve el evento en directo"
    : "El mejor stream de caridad en el norte",
};

export default function Home() {
  const router = useRouter();
  const { live } = router.query;

  return (
    <Page meta={meta}>
      {isLive || live ? <LiveTemplate /> : <OffSeasonTemplate />}
    </Page>
  );
}
