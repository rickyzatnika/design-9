import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useState, useEffect } from "react";
import { Layout, Loading } from "../components";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
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
