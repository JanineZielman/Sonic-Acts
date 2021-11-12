import React from 'react';
import { RichText } from "prismic-reactjs";

/**
 * Post list component
 */
const NewsList = ({ posts }) => {
  return (
    <div className="news-list">
      {posts.map((post, index) => (
        <div key={index}>
          <a href={'news/'+post.uid}>
            <RichText render={post.data.title}/>
          </a>
        </div>
      ))}
    </div>
  )
}

export default NewsList
