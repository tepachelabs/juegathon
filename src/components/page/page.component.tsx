import React, { FC } from "react";
import Head from "next/head";

import { Footer } from "../footer";
import { Container } from "./page.styles";

export interface PageMeta {
  title?: string;
  description?: string;
}

interface PageProps {
  children: React.ReactNode;
  title?: string;
  meta?: PageMeta;
}

export const Page: FC<PageProps> = ({ children, meta, title }) => {
  return (
    <>
      <Container className="container">
        {meta && (
          <Head>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        )}
        {children}
      </Container>
      <Footer />
    </>
  );
};
