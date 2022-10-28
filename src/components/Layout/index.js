import { Outlet } from 'react-router-dom';
import Topbar from '../Topbar';
import './index.scss';

const Layout = () =>{
    return (
        <div className="App">
            <Topbar />
            <div className="page">
            <span className="tags top-tags">Hello World</span>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout