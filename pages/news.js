import React from "react";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import { Client } from "../utils/prismicHelpers";
import NewsList from "../components/NewsList/";
import useUpdatePreviewRef from '../utils/useUpdatePreviewRef';

/**
 * Homepage component
 */
const NewsIndex = ({ newsHome, posts, previewRef }) => {
  useUpdatePreviewRef(previewRef, newsHome.id)

  if (newsHome && newsHome.data) {
    return (
      <>
        <RichText render={newsHome.data.title} />
        <NewsList posts={posts}/>
      </>
    );
  }

  return null;
};

export async function getStaticProps({ previewData }) {

  const previewRef = previewData ? previewData.ref : null
  const refOption = previewRef ? { ref: previewRef } : null
  const newsHome = await Client().getSingle("news", refOption) || {}
  const postsQueryOptions = { orderings: "[my.news-item.date desc]", ...(refOption)}
  const posts = await Client().query(Prismic.Predicates.at("document.type", "news-item"), postsQueryOptions)

  return {
    props: {
      newsHome,
      posts: posts ? posts.results : [],
      // previewRef,
    }
  }
}

export default NewsIndex;
