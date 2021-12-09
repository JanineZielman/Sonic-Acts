import React from 'react'
import { RichText } from 'prismic-reactjs'

const LandingPage = ({ slice }) => (
  <>
    <section className="landing-section">
      <div className="title-wrapper">
        <RichText render={slice.primary.title} />
      </div>
      <div className="special-text">
        <div className="layer-1">
          <div className="s1">
            {("Sonic Acts").split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
            })}
          </div>
          <div className="s2">
            {("Festival").split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
            })}
          </div>
        </div>
        <div className="layer-2">
          <div className="s1">
            {("Sonic Acts").split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
            })}
          </div>
          <div className="s2">
            {("Festival").split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
            })}
          </div>
        </div>
        <div className="animated-text">
          <div className="s1">
            {("Sonic Acts").split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
            })}
          </div>
          <div className="s2">
            {("Festival").split("").map(function(char, index){
              return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="info-wrapper">
        { slice?.items?.map((item, i) => 
          <RichText render={item.info} key={'info' + i}/>
        )}
      </div>
    </section>
  </>
)

export default LandingPage