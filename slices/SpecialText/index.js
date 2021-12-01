import React from 'react'
import { RichText } from 'prismic-reactjs'

const SpecialText = ({ slice }) => {
  
  return(
    <div className="wrapper">
      {
        slice.primary.text ?
        <>
          <div className="text">
            <span>{RichText.asText(slice.primary.text)}</span>
            { slice?.items?.map((item, i) => 
             <>
                {item.text[0] &&  
                  <sup className="noEffect">{item.text[0].text}</sup>
                }
                 {item.textEffect[0] &&  
                  <span className="effect">
                    {item.textEffect[0].text.split("").map(function(char, index){
                      return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
                    })}
                  </span>
                }
             </>
            )}
          </div>
        </>
        : <p>Sonic Acts</p>
      }
      <style jsx>{`
        .wrapper{
          width: 98vw;
          margin: 0 1vw;
          overflow-wrap: break-word;
          word-break: break-all;
          height: 100vh;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}

export default SpecialText