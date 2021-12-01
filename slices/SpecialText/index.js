import React from 'react'
import { RichText } from 'prismic-reactjs'

const SpecialText = ({ slice }) => {
  
  function isEven(n) {
    return n % 2 == 0;
  }

  return(
    <div className="wrapper">
      {
        slice.primary.text ?
        <>
          <div className="text">
            <span>{RichText.asText(slice.primary.text)}</span>
            { slice?.items?.map((item, i) => 
             <>
              { isEven(i) == true ?
                <span className="effect">
                  {item.text[0].text.split("").map(function(char, index){
                    return <span aria-hidden="true" key={index} style={{'--delay': (Math.floor(Math.random() * 20) * 0.5) + 's', '--random': (Math.floor(Math.random() * 50) + 50)}}>{char}</span>;
                  })}
                </span>
              : <span className="noEffect">{item.text[0].text}</span> 
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