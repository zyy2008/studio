import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Layout } from "components/layout";
import "styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        primaryColor: "violet",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
