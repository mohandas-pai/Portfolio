import "./index.scss"
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import AmazingLogo from "../../assets/images/amazinglogo.png"
import GLLogo from "../../assets/images/gllogo.png"
import BricksLogo from "../../assets/images/brickslogo.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGooglePlay} from '@fortawesome/free-brands-svg-icons'


const AmazingApps = () =>{
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 2000)
     }, [])

    return(
        <div className="amazing-apps">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["A","m","a","z","i","n","g"," ","A","p","p","s"]} idx={10}/>
                </h1>
                <p className="my-apps">
                    <a href="https://play.google.com/store/apps/details?id=moh.theamazingappco.bricks" target="_blank" rel="noopener noreferrer">
                        <img src={BricksLogo} alt="Bricks Logo"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=moh.theamazingappsco.germanlernen" target="_blank" rel="noopener noreferrer">
                        <img src={GLLogo} alt="GermanLernen Logo"/>
                    </a>
                </p>
            </div>
            <div className="logo-container">
                <img className="amazing-logo" src={AmazingLogo} alt="Amazing Apps Logo"/>
                <a href="https://play.google.com/store/apps/dev?id=5312685850161641223" target="_blank" rel="noopener noreferrer">
                    <button type="submit" className='flat-button'><FontAwesomeIcon icon = {faGooglePlay} color="#ffd60a"/> PlayStore </button>
                </a>
            </div>
        </div>
    )
}

export default AmazingApps;