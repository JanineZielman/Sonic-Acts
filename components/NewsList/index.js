import React from 'react';
import { RichText } from "prismic-reactjs";

/**
 * Post list component
 */
const NewsList = ({ posts }) => {
  return (
    <div className="blog-main">
      {posts.map((post, index) => (
        <>
          <a href={'news/'+post.uid}>
            <RichText render={post.data.title}/>
          </a>
        </>
      ))}
    </div>
  )
}

export default NewsList
