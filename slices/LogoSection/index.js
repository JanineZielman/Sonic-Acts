import React from 'react'
import { RichText } from 'prismic-reactjs'

const LogoSection = ({ slice }) => (
  <section className="logo-section">
    { slice?.items?.map((item, i) => <img src={item.logo.url} alt={item.logo.alt} key={'logo'+i}/>) }
  </section>
)

export default LogoSection