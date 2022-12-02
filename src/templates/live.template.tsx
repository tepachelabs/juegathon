import React from "react";
import {
  Button,
  Donations,
  Faq,
  H1,
  Hero,
  Schedule,
  Stream,
  TextBody,
} from "../components";
import Image from "next/image";

export const LiveTemplate = () => (
  <>
    <div className="row align-items-center">
      <div className="col-12 mt-2 mb-1">
        <Image
          src="/logo.svg"
          className="d-block mx-auto img-fluid"
          alt="Juegathon 2022"
          width="105"
          height="75"
          priority
        />
      </div>
    </div>
    <Stream id="juegathon" parent="juegathon.vercel.app" />
    <div className="row">
      <div className="col-12">
        <H1 className="lh-1 mb-3">Juegathon 2022</H1>
      </div>
    </div>
    <Donations />
    <Schedule className="my-5" />
    <Faq className="mt-5 pb-5" />
  </>
);
