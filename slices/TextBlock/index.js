import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextBlock = ({ slice }) => (
  <section>
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