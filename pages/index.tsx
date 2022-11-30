import React from "react";
import { H1, H2 } from '../src/components/atoms'
import { Page, PageMeta } from "../src/components/organisms";
import { Stream } from "../src/components/atoms/stream";
import { Donations } from "../src/components/organisms/donations";
import { Schedule } from "../src/components/organisms/schedule";

const meta: PageMeta = {
  title: "Juegathon 2022",
  description: "Jugamos videojuegos.",
}

export default function Home() {
  return (
    <Page meta={ meta }>
      <section>
        <H1>Juegathon 2022</H1>
        <H2>Jugando por una causa</H2>
      </section>

      <Stream id="juegathon" parent="juegathon.vercel.app"/>

      <Donations/>

      <Schedule/>
    </Page>
  )
}
