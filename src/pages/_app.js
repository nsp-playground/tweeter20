import { useEffect } from "react";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log(`App version: ${window.__APP_VERSION__}`);
  }, []);

  return <Component {...pageProps} />;
}
