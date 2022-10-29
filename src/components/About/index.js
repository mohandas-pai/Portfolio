import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { faAndroid, faCss3, faHtml5, faJava, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 2000)
     }, [])

    return(
        <div className="about-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={["A","b","o","u","t"," ","m","e"]} idx={10}/>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare bibendum est, et rhoncus turpis. Donec posuere qua.</p>
            <p>Vestibulum felis ipsum, placerat at orci eu, cursus gravida neque. Suspendisse volutpat libero ut tincidunt cursus. Etiam ac arcu a enim porta cursus. Nam porttitor nunc ac nulla ultricies, et laoreet nibh rutrum. </p>
            <p>Fusce accumsan arcu vitae lorem posuere faucibus. Suspendisse hendrerit sodales augue. Nulla commodo lectus ipsum, id pretium libero varius a.</p>
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