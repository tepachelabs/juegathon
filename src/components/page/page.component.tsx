import React, { FC } from "react";
import Head from "next/head";
import { Container } from "./page.styles";
import { Footer } from "../footer";

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
      <Container className="container my-3 pt-1 pb-5 px-5">
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
