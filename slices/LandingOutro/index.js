import React from 'react'
import { RichText } from 'prismic-reactjs'

const LandingOutro = ({ slice }) => (
  <section className="landing-section landing-outro">
    <div className="special-text">
      <div className="layer-1">
        <div>
          {RichText.asText(slice.primary.specialText1).split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
          })}
        </div>
        <div>
          {RichText.asText(slice.primary.specialText2).split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
          })}
        </div>
      </div>
      <div className="layer-2">
        <div>
          {RichText.asText(slice.primary.specialText1).split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
          })}
        </div>
        <div>
          {RichText.asText(slice.primary.specialText2).split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
          })}
        </div>
      </div>
      <div className="animated-text">
        <div>
          {RichText.asText(slice.primary.specialText1).split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
          })}
        </div>
        <div>
          {RichText.asText(slice.primary.specialText2).split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
          })}
        </div>
      </div>
    </div>
    <div className="columns-wrapper">
      { slice?.items?.map((item, i) => 
        <div className="column">
          <RichText render={item.column} key={'column-'+i}/>
        </div>
      )}
    </div>
  </section>
)

export default LandingOutro