import React from 'react';
import { RichText } from "prismic-reactjs";

const ProgrammeList = ({ posts }) => {
  return (
    <>
        <div className="programme-list">
          {posts.map((post, index) => (
            <div key={index} className="programme-item">
              <div className="content-wrapper">
                <span className="date">{post.data.day} {post.data.month.substring(0,3)} / {post.data.startTime}-{post.data.endTime}</span>
                <RichText render={post.data.title}/>
                <div className="info">
                  {post.data.series.map((item, index) => (
                    <span key={index}>{item.seriesItem}</span>
                  ))}
                  {post.data.type.map((item, index) => (
                    <span key={index}>{item.typeItem}</span>
                  ))}
                  {post.data.location.map((item, index) => (
                    <span key={index}>{item.locationItem}</span>
                  ))}
                </div>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509.92 67.74" className="vocht-1">
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M21.68,39.23s-5-8-13-8c-7,0-12,10-6,16s.19,12.19,12.09,12.09,15.6-7.14,14.16-14C27.68,39.23,23.68,42.23,21.68,39.23Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M52.68,38.23s-4,3.07,0,11.53,9,4.47,9-.53S56.68,34.23,52.68,38.23Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M36.68,58.23s-1.27,3.47,0,6c1,2,1.44,5.39,4.22,2.19s1.22-5.38,0-7.28S37.68,56.23,36.68,58.23Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M169.32,43.72a7.7,7.7,0,0,0-5-1.83c-2.68,0-4.6,2.29-2.3,3.67s.07,2.78,4.63,2.76,6-1.63,5.43-3.21C171.62,43.72,170.09,44.41,169.32,43.72Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M206.87,39.7s-1.58.74,0,2.79,3.54,1.08,3.54-.13S208.44,38.73,206.87,39.7Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M189.85,52.58a3.14,3.14,0,0,0,0,2.62c.55.88.8,2.36,2.32,1s.67-2.35,0-3.18S190.4,51.71,189.85,52.58Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M243.72,35.18s-3.61-5.24-9.4-5.24c-5.06,0-8.68,6.55-4.34,10.47s.14,8,8.75,7.91S250,43.65,249,39.13C248.06,35.18,245.17,37.14,243.72,35.18Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M278,34.64s-2.56,1.68,0,6.34,5.76,2.45,5.76-.3S280.54,32.44,278,34.64Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M261.26,49.87s-1,2.5,0,4.33c.77,1.45,1.12,3.9,3.28,1.59s.95-3.89,0-5.27S262,48.42,261.26,49.87Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M314.85,38.28s-3-4-7.8-4c-4.2,0-7.19,5-3.6,8s.12,6.09,7.26,6,9.35-3.57,8.49-7C318.45,38.28,316.05,39.78,314.85,38.28Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M349.75,33.36s-2.8,1.93,0,7.24,6.32,2.8,6.32-.34S352.56,30.86,349.75,33.36Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M334.23,54.29a1.5,1.5,0,0,0,0,1.55c.4.51.58,1.38,1.71.56s.49-1.38,0-1.87S334.63,53.78,334.23,54.29Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M388.25,33.3s-4-6-10.37-6c-5.59,0-9.58,7.47-4.79,12s.15,9.11,9.65,9S395.19,43,394,37.82C393,33.3,389.85,35.54,388.25,33.3Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M423.24,41.82s-1.16.34,0,1.3,2.61.51,2.61-.06A2.19,2.19,0,0,0,423.24,41.82Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M405.1,49.18s-1.05,2.76,0,4.77c.84,1.59,1.21,4.28,3.53,1.74s1-4.27,0-5.79S405.94,47.59,405.1,49.18Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M460.05,34s-3.85-5.7-10-5.7c-5.39,0-9.24,7.12-4.62,11.39s.14,8.68,9.3,8.61,12-5.08,10.9-10C464.67,34,461.59,36.15,460.05,34Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M494.58,38.1s-1.88,1,0,3.91,4.25,1.52,4.25-.18S496.47,36.74,494.58,38.1Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M478.15,54a1.82,1.82,0,0,0,0,1.76c.44.58.63,1.58,1.84.64s.53-1.57,0-2.13S478.59,53.37,478.15,54Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M469.92,25s-5-8-13-8c-7,0-12,10-6,16s.19,12.19,12.1,12.09,15.6-7.14,14.16-14C475.92,25,471.92,28,469.92,25Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M500.92,24s-4,3.07,0,11.54,9,4.46,9-.54S504.92,20,500.92,24Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M484.92,44s-1.26,3.47,0,6c1,2,1.45,5.39,4.23,2.2s1.22-5.38,0-7.29S485.92,42,484.92,44Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M34.92,8s-5-8-13-8c-7,0-12,10-6,16S16.11,28.19,28,28.09s15.6-7.14,14.16-14C40.92,8,36.92,11,34.92,8Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M65.92,7s-4,3.07,0,11.54,9,4.46,9-.54S69.92,3,65.92,7Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M49.92,27s-1.26,3.47,0,6c1,2,1.45,5.39,4.23,2.2s1.22-5.38,0-7.29S50.92,25,49.92,27Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M96.92,33s-5-8-13-8c-7,0-12,10-6,16S78.11,53.19,90,53.09s15.6-7.14,14.16-14C102.92,33,98.92,36,96.92,33Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M127.92,32s-4,3.07,0,11.54,9,4.46,9-.54S131.92,28,127.92,32Z"/>
                <path style={{'--delay': (Math.floor(Math.random() * 10) * 0.5) + 's'}} d="M111.92,52s-1.26,3.47,0,6c1,2,1.45,5.39,4.23,2.2s1.22-5.38,0-7.29S112.92,50,111.92,52Z"/>
              </svg>
            </div>
          ))}
        </div>
    </>
  )
}

export default ProgrammeList
