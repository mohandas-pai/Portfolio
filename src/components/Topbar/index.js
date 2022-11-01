import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoM from "../../assets/images/logo-m.png"
import LogoSub from "../../assets/images/logo_sub.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome,faEnvelope,faUser,faSuitcase,faBars,faClose} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';

const Topbar = () =>{

    const [showNav,setShowNav] = useState(false);
    return(
    <div className='nav-bar'>
        <Link className='logo' to="/">
            <img src={LogoM} alt="logo"/>
            <img className='sub-logo' src={LogoSub} alt="logosub"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon = {faHome} color="#003566"/>
            </NavLink>
            <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon = {faUser} color="#003566"/>
            </NavLink>
            <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon = {faSuitcase} color="#003566"/>
            </NavLink>
            <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color="#003566"/>
            </NavLink>
            <FontAwesomeIcon
                onClick={()=>setShowNav(false)}
                icon={faClose}
                color="#003566"
                size='3x'
                className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mohandas-pai/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#000814"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/mohandas-pai'>
                    <FontAwesomeIcon icon={faGithub} color="#000814"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
            onClick={()=>setShowNav(true)}
            icon={faBars}
            color="#ffd60a"
            size='3x'
            className='hamburger-icon'
        />
    </div>
    )
}
    

export default Topbar