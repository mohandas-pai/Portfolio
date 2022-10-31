import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import { useEffect, useState , useRef} from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Loader from 'react-loaders';

const Contact = () => {
    const form = useRef();
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 2000)
     }, [])

     const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lgb2t2r', 'template_3n98dt7', form.current, 'y2POvS4i2OyMwTr2K')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <>
            <div className="container contact-page" >
                <div className="text-zone">
                    <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["C","o","n","t","a","c","t"," ","m","e"]} idx={10}/>
                    </h1>
                    <p>Hello contact me please</p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li >
                                    <input type="text" name='email' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Airody Mohandas Pai,<br />
                    Peter-Hille-Weg 11, A3-3, <br/>
                    33098, Paderborn, Germany <br/>
                    <span>paimohandas45@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[51.71164, 8.76891]} zoom={13} >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[51.71164, 8.76891]}>
                            <Popup>Mohandas lives here :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="cube-transition"/>
        </>
    )
};

export default Contact;