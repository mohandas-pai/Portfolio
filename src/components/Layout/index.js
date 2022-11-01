import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar';
import './index.scss';
import AnimatedCursor from "react-animated-cursor"

const Layout = () =>{
    return (
        <div className="App">
            <AnimatedCursor
            innerSize={8}
            outerSize={24}
            color='255, 95, 31'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}/>
            <Topbar />
            <div className="page">
            <span className="tags top-tags">Airody Mohandas Pai</span>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout