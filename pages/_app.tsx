import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import posthog from "posthog-js"
import { PostHogProvider } from 'posthog-js/react'
import { useRouter } from "next/router";
import "../styles/globals.css";

const posthogClientToken = process.env.NEXT_PUBLIC_POSTHOG_CLIENT_TOKEN || "";

// Check that PostHog is client-side
if (typeof window !== 'undefined') {
  posthog.init(posthogClientToken, {
    api_host: 'https://app.posthog.com',
    // Enable debug mode in development
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug()
    }
  })
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    // Track page views
    const handleRouteChange = () => posthog.capture('$pageview')

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <PostHogProvider client={posthog}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Juegathon" />
        <meta name="twitter:site" content="@juegathon" />
        <meta property="og:image" content="/cover.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </PostHogProvider>
  );
}
