import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout";
import "../styles/globals.css";

// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     id.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}
