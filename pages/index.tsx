import React from "react";

const isLive = false;

import { Page, PageMeta } from "../src/components";
import { LiveTemplate } from "../src/templates/live.template";
import { OffSeasonTemplate } from "../src/templates/off-season.template";

const meta: PageMeta = {
  title: isLive ? "Juegathon en Vivo" : "Juegathon 2022",
  description: isLive
    ? "Ve el evento en directo"
    : "El mejor stream de caridad en el norte",
};

export default function Home() {
  return (
    <Page meta={meta}>{isLive ? <LiveTemplate /> : <OffSeasonTemplate />}</Page>
  );
}
