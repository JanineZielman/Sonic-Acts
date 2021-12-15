import { useEffect, useRef, useState} from "react";
import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  // const landingRef = useRef();
  // const [pageHeight, setPageHeight] = useState(parseInt(1000));
  // useEffect(() => {
  //   setPageHeight(parseInt(landingRef.current.clientHeight));
  // }, []);
  // console.log(pageHeight)
  return(
    // <section className="landing" id="landing" ref={landingRef} style={{'--pageHeight': pageHeight}}>
    <section className="landing" id="landing">
      <SliceZone {...props} resolver={resolver} />
      {/* <div className="wrapper">
        <div className="particle elem1 anim-delay1"></div>
        <div className="particle elem2 anim-delay5"></div>
        <div className="particle elem3 anim-delay3"></div>
        <div className="particle elem4 anim-delay8"></div>
        <div className="particle elem5 anim-delay9"></div>
      </div> */}
    </section>
    
  );
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  type: 'page',
  queryType: 'repeat',
  apiParams: {
    uid: 'home'
  }
});

export default Page;