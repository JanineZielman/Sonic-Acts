import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps } from "next-slicezone/hooks";

import resolver from "../sm-resolver.js";

const Page = (props) => {
  return(
    <section className="landing">
      <SliceZone {...props} resolver={resolver} />
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