/* eslint-disable react/prop-types */
import { useEffect } from "react";
import TagManager from "react-gtm-module";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.scss";

const tagManagerArgs = {
  id: "GTM-KTZGQ76",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
