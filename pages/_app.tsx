import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Header from "@/pages/components/navigation/Header";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="mt-20 md:px-16">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default appWithTranslation(App);
