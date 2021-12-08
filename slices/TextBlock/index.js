import React from 'react'
import { RichText } from 'prismic-reactjs'

const TextBlock = ({ slice }) => (
  <section className="text-block">
    {slice.primary.headline != "" ?
      <div className="headline">
        <RichText render={slice.primary.headline} />
      </div>
      : null
    }
    { slice.primary.text != "" ?
      <RichText render={slice.primary.text}/>
      : null
    }
  </section>
)

export default TextBlock