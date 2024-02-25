import React from 'react'
import './drag.css' 
import gsap from 'gsap' ;
gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Drag() {
  gsap.fromTo(".left__sub__drag__subspan1" ,
  {
    x:-208,

      
  },
  {
    x:0,
     
      duration: 0.3,
      
      scrollTrigger: {
          trigger: ".left__sub__drag__subspan1",
         start:"top bottom",
        
          scrub:false,
          markers: false,
          toggleActions: 'play start reverse reverse'
      } , onComplete:gsap.fromTo(".left__sub__drag__subspan2" ,
      {
        x:-263,
    
          
      },
      {
        x:0,
         
          duration: 0.3,
          
          scrollTrigger: {
              trigger: ".left__sub__drag__subspan2",
             start:"top bottom",
             
              scrub: true,
              markers: false,
              toggleActions: 'play pause reverse complete'
          }
    })
  })

  return (
    <>

    <section className='dragmain'

    >
        <div className="sub__drag">
            <div className="left__sub__drag">
                <span className="left__sub__drag__subspan1">partner</span>
                <span className="left__sub__drag__subspan2">love</span>
            </div>
<div className="right__sub__drag">
<div className="right__sub__drag__sub__drag">
Take heed, as the 
  </div>
  <div className="right__sub__drag__sub__drag">
  lion's roar in our client 
  </div>
  <div className="right__sub__drag__sub__drag">
  reviews resounds.
  </div>
  </div>
        </div>

    </section>
    </>
  )
}

export default Drag
