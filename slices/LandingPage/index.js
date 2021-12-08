import React from 'react'
import { RichText } from 'prismic-reactjs'


const LandingPage = ({ slice }) => (
  <section className="landing-section">
    <div className="title-wrapper">
      <RichText render={slice.primary.title} />
    </div>
    <div className="info-wrapper">
      { slice?.items?.map((item, i) => 
        <RichText render={item.info} key={'info' + i}/>
      )}
    </div>
  </section>
)

export default LandingPage