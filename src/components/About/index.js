import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { faAndroid, faCss3, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [age, setAge] = useState('25');
    
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 2000)
     }, [])

     setInterval(() => {
         let time = (new Date() - new Date(850915832000)) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
         setAge(time.toString().substring(0, 12));
     }, 50);

    return(
        <div className="about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={["A","b","o","u","t"," ","m","e"]} idx={10}/>
            </h1>
            <p>I am a {age} year-old developer, from India.</p>
            <p>I am pursuing my Masters in Computer Science from University Paderborn, Germany. I have has 2+ years of expirence prior to this. </p>
            <p>I am well versed in various programmming languages like java, python, javascript, etc.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAndroid} color='#3DDC84'/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faJava} color='#ed1d25' />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4'/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faHtml5} color='#f06529'/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9'/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About