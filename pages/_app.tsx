import "tailwindcss/tailwind.css";
import "typeface-bitter";
import "typeface-cambo";
import "../public/styles.css";

import ProgressBar from "@badrap/bar-of-progress";
import { Analytics } from "@vercel/analytics";
import { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";

import { defaultSEOConfig } from "@/utils";

const progress = new ProgressBar({
  size: 5,
  color: "#1870d5",
  className: "bar-of-progress",
  delay: 100,
});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", progress.start);
    router.events.on("routeChangeComplete", progress.finish);
    router.events.on("routeChangeError", progress.finish);

    return () => {
      router.events.off("routeChangeStart", progress.start);
      router.events.off("routeChangeComplete", progress.finish);
      router.events.off("routeChangeError", progress.finish);
    };
  }, [router]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="echo karriere er en karrieredag for IT-studenter i Bergen." />
      </Head>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
