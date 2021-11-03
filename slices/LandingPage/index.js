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
                return <span aria-hidden="true" key={index} style={{'--delay': (index * 0.5) + 's', '--random': Math.floor(Math.random() * 25 + 10) + 's'}}>{char}</span>;
              })}
              <br/>
              {RichText.asText(slice.primary.bigText2).split("").map(function(char, index){
                return <span aria-hidden="true" key={index} style={{'--delay': (index * 0.5) + 's', '--random': Math.floor(Math.random() * 25 + 10) + 's'}}>{char}</span>;
              })}
            </h1>
          : <p>Sonic Acts</p>
        }
      </div>
    </div>
    <style jsx>{`
      section{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
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
        /* font-variation-settings: 'wght' 50; */
        cursor: default;
      }

      .big-text span{
        /* animation: fontAnimationHover 10s infinite, colorAnimation 20s infinite;
        animation-delay: var(--delay), var(--delay);
        color: rgb(210,202,228);
        font-family: 'test', Arial, Helvetica, sans-serif;
        animation-timing-function: ease-in-out, ease-in-out;
        transition: animation 20s ease-in-out;
        animation-direction: alternate; */
        font-variation-settings: 'wght' 50;
        color: rgb(210,202,228);
        /* animation-direction: reverse; */
        transition: font-variation-settings 1s;
        transition-timing-function: cubic-bezier(0, 0, 0.38, 1);
        font-family: 'test', Arial, Helvetica, sans-serif;
        /* animation-timing-function: ease-in-out, ease-in-out; */
      }

      .big-text span:hover{
        /* animation-delay: 0, var(--delay); */
        /* animation: fontAnimationHover 5s infinite, colorAnimation 20s infinite; */
        /* animation: fontAnimationHover 5s, colorAnimation 20s; */
        /* animation-delay: var(--delay), var(--delay); */
        font-variation-settings: 'wght' 100;
      }

      /* @keyframes fontAnimation {
        0% {
          font-variation-settings: 'wght' 50;
        }
        25% {
          font-variation-settings: 'wght' 100;
        }
        50% {
          font-variation-settings: 'wght' 50;
        }
        100% {
          font-variation-settings: 'wght' 50;
        }
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