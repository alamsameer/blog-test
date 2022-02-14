import { useLayoutEffect, useRef, useState } from "react";
import intyoga from "../assets/images/intyoga-3.png"
import a2 from "../assets/images/a-2.png"
const HeroBlog = ()=>{
   const[imgHeight,setHeight]=useState()
   const height =useRef(null)
   const getheight =()=>{
     return height.current.offsetWidth/1.707+'px'
   }
   useLayoutEffect(()=>{
     setHeight(getheight)
     window.addEventListener('resize',()=>{
      setHeight(getheight)
    })
   },[])
  
    return (
        <div className="big-article">
        <a href="/blogs/international-yoga-day-why-do-we-celebrate-it">
          <div className="big-article-img" ref={height} style={{height:`${imgHeight}`}}>
            <img src={intyoga} alt="" style={{objectFit: "cover" }}/>
            <div className="read-more">
              <p>Read more {'>>'}</p>
            </div>
          </div>
        </a>
        <div className="article-text-area big-article-text-area">
          <div className="text-and-date">
            <h3>Fitness</h3>
            <span></span>
            <h4>21st June 2021</h4>
          </div>
          <div className="article-content">
            <a href="/blogs/international-yoga-day-why-do-we-celebrate-it"
              ><h3>
                International Yoga Day : Why do we celebrate it?
              </h3></a>
            <p>
              “Yoga does not make your life better. It makes you better at life.”
              That pretty much sums up the purpose of Yoga in our life. One starts the journey of Yoga with pain, and then eventually ends up gaining strength, flexibility and stillness ... 
            </p>
          </div>
          <div className="article-author">
            <div className="author-img">
              <img src={a2}alt="" />
            </div>
            <div className="author-info">
              <h4>Sejal Agarwal</h4>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeroBlog