import React from 'react';
import { RichText } from "prismic-reactjs";

const ProgrammeList = ({ posts }) => {
  return (
    <>
        <div className="programme-list">
          {posts.map((post, index) => (
            <div key={index} className="programme-item">
              <div className="content-wrapper">
                <span className="date">{post.data.day} {post.data.month.substring(0,3)} / {post.data.startTime}-{post.data.endTime}</span>
                <RichText render={post.data.title}/>
                <div className="info">
                  {post.data.series.map((item, index) => (
                    <span key={index}>{item.seriesItem}</span>
                  ))}
                  {post.data.type.map((item, index) => (
                    <span key={index}>{item.typeItem}</span>
                  ))}
                  {post.data.location.map((item, index) => (
                    <span key={index}>{item.locationItem}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default ProgrammeList
