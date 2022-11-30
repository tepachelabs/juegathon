import React, { FC } from "react";
import { Container } from "./page.styles";
import Head from "next/head";

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
    <Container>
      { meta && (
        <Head>
          <title>{ meta.title }</title>
          <meta name="description" content={ meta.description }/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
      ) }
      { children }
    </Container>
  );
}
