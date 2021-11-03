import React from 'react'
import { RichText } from 'prismic-reactjs'


const LandingPage = ({ slice }) => (
  <section>
    <div className="wrapper">
      <div className="big-text">
        {
          slice.primary.bigText1 ?
            <h1>
              {RichText.asText(slice.primary.bigText1).split("").map(function(char, index){
                return <span aria-hidden="true" key={index} style={{'--delay': (index * 0.5) + 's'}}>{char}</span>;
              })}
              <br/>
              {RichText.asText(slice.primary.bigText2).split("").map(function(char, index){
                return <span aria-hidden="true" key={index} style={{'--delay': (index * 0.5) + 's'}}>{char}</span>;
              })}
            </h1>
          : <p>Sonic Acts</p>
        }
      </div>
      {/* <div className="big-text test">
        <h1>
          {("toxicity’s").split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (index * 0.5) + 's'}}>{char}</span>;
          })}
          <br/>
          {("reach").split("").map(function(char, index){
            return <span aria-hidden="true" key={index} style={{'--delay': (index * 0.5) + 's'}}>{char}</span>;
          })}
        </h1>
      </div> */}
    </div>
    <style jsx>{`
      section{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        overflow-y: scroll;
        color: white;
        background-color: rgb(36,11,35);
        animation: bgAnimation 20s infinite;
        animation-timing-function: ease-in-out;
      }

      @keyframes bgAnimation {
        0% {
          background-color: rgb(36,11,35);
        }
        20% {
          background-color: rgb(86,9,0);
        }
        40% {
          background-color: rgb(58,57,56);
        }
        60% {
          background-color: rgb(4,39,20);
        }
        80% {
          background-color: rgb(7,21,61);
        }
        100% {
          background-color: rgb(36,11,35);
        }
      }

      @keyframes colorAnimation {
        0% {
          color: rgb(210,202,228);
        }
        20% {
          color: rgb(255,244,140);
        }
        40% {
          color: rgb(192,225,215);
        }
        60% {
          color: rgb(245,183,212);
        }
        80% {
          color: rgb(190,223,236);
        }
        100% {
          color: rgb(210,202,228);
        }
      }
      .wrapper{
        display: flex;
        flex-wrap: wrap;
        overflow: none;
        word-break: break-all;
        justify-content: center;
        width: 90vw;
        left: 5vw;
        position: absolute;
        top: 48%;
        transform: translateY(-50%);
      }
      .big-text{
        font-size: 16vw;
        line-height: 0.9;
        font-family: 'test', Arial, Helvetica, sans-serif;
        text-align: center;
        cursor: default;
        /* height: 90vh;
        margin-top: 10vh; */
      }

      .big-text span{
        animation: colorAnimation 20s infinite;
        animation-delay: var(--delay);
        color: rgb(210,202,228);
        animation-timing-function: ease-in-out, ease-in-out;
        animation-direction: alternate;
        font-variation-settings: 'wght' 50;
        color: rgb(210,202,228);
        transition: font-variation-settings 1s;
        transition-timing-function: cubic-bezier(0.1, 0.1, 0.1, 0.1);
        font-family: 'test', Arial, Helvetica, sans-serif;
      }

      .big-text span:hover{
        font-variation-settings: 'wght' 100;
      }

   

      @keyframes fontAnimationHover {
        0% {
          font-variation-settings: 'wght' 50;
        }
        100% {
          font-variation-settings: 'wght' 100;
        }
      } */

    `}</style>
  </section>
)

export default LandingPage