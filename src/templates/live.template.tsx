import React from "react";
import { Donations, Faq, Hero, Schedule, Stream } from "../components";

export const LiveTemplate = () => (
  <>
    <Hero className="g-5 py-5" />
    <Stream id="juegathon" parent="juegathon.vercel.app" />
    <Schedule className="my-5" />
    <Donations />
    <Faq className="mt-5 pb-5" />
  </>
);
