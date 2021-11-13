import React from "react";
import { RichText } from "prismic-reactjs";
import SliceZone from "next-slicezone";
import resolver from "../../sm-resolver.js";

// Project functions & styles
import { Client } from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from '../../utils/queries';


const NewsPage = ( {news} ) => {

  if (news.data) {
    return (
      <section>
        <RichText render={news.data.title} />
        <span>{news.data.date}</span>
        <SliceZone {...news.data} resolver={resolver} />
        <style jsx>{`
          section {
            max-width: 600px;
            margin: 4em auto;
            text-align: center;
          }
        `}</style>
      </section>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const news = await Client().getByUID("news-item", params.uid) || {}
  return {
    props: {
      news
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'news-item')
  return {
    paths: documents.map(doc => `/news/${doc.uid}`),
    fallback: false,
  }
}

export default NewsPage;
