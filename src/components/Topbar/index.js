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
            <NavLink onClick={()=>setShowNav(false)} exact="true" activeclassname="active" className="amazing-link" to="/amazingapps">
            <svg className='amazing-svg' version="1.0" xmlns="http://www.w3.org/2000/svg"
                width="25.000000pt" height="25.000000pt" viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet">
                <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
                </metadata>
                <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                fill="#003566">
                <path d="M2181 4414 c-40 -13 -92 -38 -115 -53 -65 -45 -135 -126 -166 -194
                -16 -34 -227 -628 -469 -1319 -345 -984 -441 -1268 -441 -1306 0 -70 34 -130
                94 -167 l49 -30 288 -3 c186 -2 307 0 342 8 97 20 171 71 209 145 35 67 942
                2662 952 2722 13 76 -30 157 -105 198 -47 25 -47 25 -305 25 -250 -1 -262 -1
                -333 -26z"/>
                <path d="M3187 3702 c-16 -18 -57 -129 -296 -812 -138 -391 -143 -411 -142
                -510 1 -93 10 -126 155 -540 138 -393 152 -417 273 -473 45 -20 65 -22 335
                -25 343 -5 380 1 443 61 54 52 72 110 57 177 -20 85 -731 2103 -748 2121 -22
                24 -56 24 -77 1z"/>
                </g>
            </svg>
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