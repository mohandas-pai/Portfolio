import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contacts';
import Skills from './components/Skills';
import AmazingApps from './components/AmazingApps';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/contact" index element={<Contact />} />
          <Route path="/skills" index element={<Skills />} />
          <Route path="/amazingapps" index element={<AmazingApps />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
