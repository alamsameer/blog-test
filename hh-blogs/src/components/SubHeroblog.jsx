import { useLayoutEffect, useRef, useState } from "react";
import chooseYoga from "../assets/images/chooseyoga-2.png";
import a3 from "../assets/images/a-3.png";
import a1 from "../assets/images/a-1.png";
import ryan from "../assets/images/ryan.jpeg"
const SubHero =()=>{
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
        <>
        <div className="medium-article med-art-1">
          <a href="/blogs/5-reasons-to-choose-yoga-over-gym">
            <div className="medium-article-img" ref={height} style={{height:`${imgHeight}`}}>
              <img src={chooseYoga} alt=""  style={{objectFit:'cover'}}/>
              <div className="read-more">
                <p>Read more {">>"}</p>
              </div>
            </div>
          </a>
          <div className="medium-article-text-area">
            <div className="text-and-date">
              <h3>Written</h3>
              <span></span>
              <h4>04th April 2021</h4>
            </div>
            <div className="article-content">
              <h3>5 reasons to choose Yoga over Gym</h3>
              <p>
                Recently you had an alarming revelation when you saw the number on your weighing machine when you were taking your weight.
                Or you just found out that your favourite dress no longer fits you...
              </p>
            </div>
            <div className="article-author">
              <div className="author-img">
                <img src={a3} alt="" />
              </div>
              <div className="author-info">
                <h4>Lavitra Garg</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="medium-article med-art-2">
          <a href="/blogs/international-yoga-day-celebration-with-ryan-international-school">
            <div className="medium-article-img" ref={height} style={{height:`${imgHeight}`}}>
              <img src={ryan} alt="" style={{objectFit:'cover'}} />
              <div className="read-more">
                <p>Read more{">>"}</p>
              </div>
            </div>
          </a>
          <div className="medium-article-text-area">
            <div className="text-and-date">
              <h3>Written</h3>
              <span></span>
              <h4>22nd June 2021</h4>
            </div>
            <div className="article-content">
              <h3>International Yoga Day Celebration with Ryan International School, Noida</h3>
              <p>
                21st June 2021 marks the 7th chapter of International Yoga Day. On the morning of 21st June 2021, the children of Ryan International School, Noida Extension, were greeted by the team of Health Highway... 
              </p>
            </div>
            <div className="article-author">
              <div className="author-img">
                <img src={a1} alt="" />
              </div>
              <div className="author-info">
                <h4>Aniruddha Ganguly</h4>
              </div>
            </div>
          </div>
        </div>
   </>
    )
}

export default SubHero