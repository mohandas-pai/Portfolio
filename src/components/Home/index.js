import './index.scss';
import { useEffect, useState } from 'react'
import LogoM from "../../assets/images/logo-dm.png"
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Photo from './Photo';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o','h','a','n','d','a','s'];
    const jobArray = ['S','o','f','t','w','a','r','e',' ','D','e','v','e','l','o','p','e','r'];

    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _13 `}>i</span>
                    <span className={`${letterClass} _14 `}>,</span>
                    <br/>
                    <span className={`${letterClass} _15 `}>I</span>
                    <span className={`${letterClass} _16 `}>'</span>
                    <span className={`${letterClass} _17 `}>m</span>
                    <img className='m-logo' src={LogoM} alt='dev'/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={19}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={26}/>
                </h1>
                <h2>Android / Webapp developer</h2>
                <Link to='/contact' className='flat-button'> CONTACT ME</Link>
            </div>
            <Photo/>
        </div>
    );
};

export default Home;