import React from 'react'
import { RichText } from 'prismic-reactjs'

const LandingPage = ({ slice }) => (
  <section>
    {/* <span className="main-title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span> */}
    <span className="big-text">
      {
        slice.primary.bigText ?
        <RichText render={slice.primary.bigText}/>
        : <p>start by editing this slice from inside Prismic builder!</p>
      }
    </span>
    <style jsx>{`
      section{
        display: flex;
        flex-wrap: wrap;
        overflow: none;
        word-break: break-all;
        justify-content: center;
        width: 90vw;
        left: 5vw;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      .main-title{
        font-size: 6vw;
        line-height: 1;
        position: absolute;
        left: 1vw;
        top: 4vw;
      }
      .big-text{
        font-size: 16vw;
        line-height: 1;
        /* text-indent: 31.5vw; */
      }
    `}</style>
  </section>
)

export default LandingPage