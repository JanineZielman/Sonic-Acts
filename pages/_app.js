import "../styles/globals.scss";
import "../styles/landing.scss";
import "../styles/festival/globals.scss";
import "../styles/festival/programme.scss";
import "../styles/loading.scss"

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading/index.js"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <>
      <Loading loading={loading} />  
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
