import React from "react";
import { Donations, Faq, Hero, Page, Schedule, Stream } from "../components";

export const LiveTemplate = () => (
  <>
    <Hero className="g-5 py-5" />

    <Stream id="juegathon" parent="juegathon.vercel.app" />

    <Schedule />

    <Donations />

    <Faq />
  </>
);
