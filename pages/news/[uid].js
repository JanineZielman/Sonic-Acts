import React from "react";
import { RichText } from "prismic-reactjs";
import SliceZone from "next-slicezone";
import resolver from "../../sm-resolver.js";

// Project functions & styles
import { Client } from "../../utils/prismicHelpers";
import { queryRepeatableDocuments } from '../../utils/queries';
import useUpdatePreviewRef from '../../utils/useUpdatePreviewRef';


const NewsPage = ( {news, previewRef} ) => {

  const props = news.data;

  useUpdatePreviewRef(previewRef, news.id)

  if (news && news.data) {
    return (
      <section>
        <RichText render={news.data.title} />
        <span>{news.data.date}</span>
        <SliceZone {...props} resolver={resolver} />
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

export async function getStaticProps({ params, previewData }) {
  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null

  const news = await Client().getByUID("news-item", params.uid, refOption) || {}
  return {
    props: {
      previewRef,
      news
    }
  }
}

export async function getStaticPaths() {
  const documents = await queryRepeatableDocuments((doc) => doc.type === 'news-item')
  return {
    paths: documents.map(doc => `/news/${doc.uid}`),
    fallback: true,
  }
}

export default NewsPage;
