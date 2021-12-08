import React from 'react'
import Collapsible from 'react-collapsible';
import { RichText } from 'prismic-reactjs'

const CollapsibleSection = ({ slice }) => (
  <div>
    {slice.primary.headline != "" ?
      <Collapsible trigger={RichText.asText(slice.primary.headline)}>
        <RichText render={slice.primary.text}/>
      </Collapsible>
      : null
    }
  </div>
)

export default CollapsibleSection