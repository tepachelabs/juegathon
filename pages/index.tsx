import React from "react";
import { useRouter } from "next/router";

import { Page, PageMeta } from "../src/components";
import { LiveTemplate } from "../src/templates/live.template";
import { OffSeasonTemplate } from "../src/templates/off-season.template";
import { fetchConfig } from "../src/remote-config";

const generateMeta = (isLive: boolean) => {
  const meta: PageMeta = {
    title: isLive ? "Juegathon en Vivo" : "Juegathon 2022",
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

  return (
    <Page meta={meta}>
      {config.live || live ? <LiveTemplate /> : <OffSeasonTemplate />}
    </Page>
  );
}
