import React from 'react'
import { RichText } from 'prismic-reactjs'

const SpecialText = ({ slice }) => (
  <div className="wrapper">
    {
      slice.primary.text ?
      <>
        <div className="text">
          <span>Sonic Acts '22</span>
          <RichText render={slice.primary.text}/>
        </div>
        <div className="text2">
          <span>Sonic Acts '22</span>
          <RichText render={slice.primary.text}/>
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
      .wrapper span{
        float: left;
        font-size: 10vw;
        margin-right: 36px;
      }
      .wrapper .text{
        font-size: 36px;
        margin-left: 10px;
        display: inline-block;
        word-break: break-all;
        overflow-wrap: break-word;
        position: absolute;
        top: 0;
        left: 0;
      }
      .wrapper .text2{
        font-size: 36px;
        margin-left: 10px;
        display: inline-block;
        word-break: break-all;
        overflow-wrap: break-word;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    `}</style>
  </div>
)

export default SpecialText