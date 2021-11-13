import React from "react";
import Prismic from '@prismicio/client'
import { RichText } from "prismic-reactjs";

// Project components & functions
import { Client } from "../utils/prismicHelpers";
import NewsList from "../components/NewsList/";

/**
 * Homepage component
 */
const NewsIndex = ({ newsHome, posts }) => {

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

export async function getStaticProps() {

  const newsHome = await Client().getSingle("news") || {}
  const postsQueryOptions = { orderings: "[my.news-item.date desc]"}
  const posts = await Client().query(Prismic.Predicates.at("document.type", "news-item"), postsQueryOptions)

  return {
    props: {
      newsHome,
      posts: posts ? posts.results : [],
    }
  }
}

export default NewsIndex;
