import './index.scss'
import Moh from "../../../assets/images/moh.png"
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';

const Photo = () => {

    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
        //   .from(outlineLogoRef.current, {
        //     drawSVG: 0,
        //     duration: 10,
        //   })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])


    return(
        <div className="photos-contain" ref={bgRef} >
            <img ref={solidLogoRef} clasName='mohphoto' src={Moh} alt="M"/>
        </div>
    )
};

export default Photo;