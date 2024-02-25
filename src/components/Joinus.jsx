import React from 'react'
import './joinus.css' 
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Joinus() {
  gsap.fromTo(".sub__sub__div1" ,
{
  x:240,

} ,{

x:0,


  
   
    
    scrollTrigger: {
        trigger: ".right__1",
        start:"top bottom",
        
        
       
       scrub:true,
        markers: false,
        toggleActions: 'play pause reverse complete'
    } 
  } 
) 
  return (
    <>
    <section className="join__main">
        <div className="sub1__join__main">
            <div className="sub__sub">
                <span className='sub__sub__div1'>join our</span>
                <span className='sub__sub__div2'>jungle</span>
                <span className='sub__sub__div3'>trek</span>


            </div>

          
        </div>
        <div className="main2">
          <div className='main2__suvdiv'>
            <div>Dribble</div>
            <img src="./public/assets (2)/asset 21.svg" alt="" />
          </div>
          <div className='main2__suvdiv'>
            <div>LinkedIn</div>
            <img src="./public/assets (2)/asset 22.svg" alt="" />
          </div>
          <div className='main2__suvdiv'>
            <div>Facebook</div>
            <img src="./public/assets (2)/asset 25.svg" alt="" />
          </div>
          <div className='main2__suvdiv'>
            <div>Behance</div>
            <img src="./public/assets (2)/asset 24.svg" alt="" />
          </div>
          <div className="main2__suvdiv">
          <div>instagram</div>
           
          <img src="./public/assets (2)/asset 23.svg" alt="" />
          </div>
          </div>
          
          
       
    </section>
    </>
  )
}

export default Joinus
