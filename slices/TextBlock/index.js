import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextBlock = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.text ?
      <RichText render={slice.primary.text}/>
      : <p>start by editing this slice from inside Prismic builder!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
    `}</style>
  </section>
)

export default TextBlock