import Layout from "@/components/layout";
import "../styles/globals.css";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
    </Layout>
  );
}
