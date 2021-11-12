import React from 'react'
import Metaballs from "react-metaballs-js";

const Image = ({ slice }) => (
  <div>
    {
      slice.primary.image.url ?
      <div className="wrapper">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      
        <Metaballs
            numMetaballs={100}
            minRadius={1}
            maxRadius={10}
            speed={0.5}
            color="#ffffff"
            backgroundColor="#000000"
            className="balls"
            width= "900px"
            height="400px"
          />
        </div>
      : null
    }
    
    <style jsx>{`
      .wrapper{
        position: relative;
        overflow: hidden;
        height: 400px;
        width: 900px;
        margin-top: 24px;
      }
      img{
        position: absolute;
        left: 0;
        top: 0;
        mix-blend-mode: screen;
        width: 900px;
        height: 400px;
        object-fit: cover;
        /* mask-image: url(blob.svg); */
      }
    `}</style>
  </div>
)

export default Image