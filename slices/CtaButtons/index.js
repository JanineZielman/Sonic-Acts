import React from 'react'
import { RichText } from 'prismic-reactjs'
import Slide from 'react-reveal/Slide';

const CtaButtons = ({ slice }) => (
  <section className="cta-buttons">
  { slice?.items?.map((item, i) => 
    <Slide right key={'slide-' + i}>
      <div className="slide-wrapper" >
        <a href="">{ item.buttonText }</a>
      </div>
    </Slide>
  )}
  </section>
)

export default CtaButtons