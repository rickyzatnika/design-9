import "aos/dist/aos.css";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Layout, Loading } from "../components";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);



  if (!showChild) {
    return null;
  }

  if (typeof window === null) {
    return <></>;
  } else {
    return (
      <>
        <Head>
          <title>Wedding Rudy & Astrid</title>
          <meta name="description" content="Webhouse Invitation - Buat undangan pernikahanmu yang spesial dengan web undangan kami. Temukan desain dan pilihan yang sesuai dengan kebutuhanmu."></meta>
          <meta name="keywords" content="Webhouse Invitation, web undangan pernikahan, undangan pernikahan online, desain undangan pernikahan, webhouse invitation"></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Webhouse Invitation - Web Undangan Pernikahan Rahmadi & Dinda" />
          <meta property="og:description" content="Webhouse Invitation - Buat undangan pernikahanmu yang spesial dengan web undangan kami. Temukan desain dan pilihan yang sesuai dengan kebutuhanmu." />
          <meta property="og:url" content="https://design-9.vercel.app" />
        </Head>
        <AnimatePresence mode="wait">
          <Layout>
            <Loading />
            <Component {...pageProps} />
          </Layout>
        </AnimatePresence>
      </>
    );
  }
}
