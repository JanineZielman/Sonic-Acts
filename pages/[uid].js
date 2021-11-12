import { Client } from "../prismic-configuration";
import SliceZone from "next-slicezone";
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks";
import { RichText } from 'prismic-reactjs'
import resolver from "../sm-resolver.js";

const Page = (props) => {
  return (
    <section>
      <RichText render={props.data.title} />
      <SliceZone {...props} resolver={resolver} />
      <style jsx>{`
        section {
          max-width: 900px;
          margin: 4em auto;
          text-align: center;
        }
      `}</style>
    </section>
  )
}

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: 'repeat',
  type: 'page',
  apiParams({ params }) {
    return {
      uid: params.uid
    }
  }
});

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  formatPath: (prismicDocument) => {
    return {
      params: {
        uid: prismicDocument.uid
      }
    }
  }
});

export default Page;
