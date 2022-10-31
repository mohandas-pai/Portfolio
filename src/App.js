import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" index element={<About />} />
          <Route path="/contact" index element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
