import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState } from 'react'
import WordCloud from './wordcloud'
import CV from '../../assets/pdf/AirodyMohandasPaiCV.pdf'

const Skills = () => {

    function btnClick(){
        console.log("Here")
        window.open({CV},"_blank");
    }

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 2000)
     }, [])
    return(
        <div className='skills-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['S','k','i','l','l','s']} idx={15}/>
                </h1>
                <p>Good understanding in technologies like <span className='tech'>Java</span>, <span className='tech'>Python</span>,
                <span className='tech'>React</span>, <span className='tech'>Node</span>, <span className='tech'>HTML</span>, <span className='tech'>Git,</span> etc.
                </p>
                <p>I develop application both for <span className='tech'>Abdroid</span> and <span className='tech'>Web</span> that are user friendly, intuitive and helpful. Add more here</p>
                <p>Feel free to contact me. You can also check out my cv by clicking the button below.</p>
                <input onClick={btnClick} target="_blank" type="button" className='flat-button' value='CV'/>
            </div>
            <div className='wordcloud-container'>
                <WordCloud/>
            </div>
        </div>
    );
};

export default Skills;