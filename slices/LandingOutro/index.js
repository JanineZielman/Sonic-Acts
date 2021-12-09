import React from 'react'
import { RichText } from 'prismic-reactjs'

const LandingOutro = ({ slice }) => (
  <section className="landing-outro">
    <RichText render={slice.primary.title}/>
    <div className="columns-wrapper">
      { slice?.items?.map((item, i) => 
        <div className="column" key={'column-'+i}>
          <RichText render={item.column}/>
        </div>
      )}
    </div>
  </section>
)

export default LandingOutro