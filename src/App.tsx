import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import './index.css';
import logo from './logo.svg';
import ScrollToTop from './components/ScrollToTop';
import {useDocTitle} from './components/CustomHook';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import  Contact  from './pages/Contact';
import DemoProduct from './pages/DemoProduct';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("MLD | Molad e Konsult - Bespoke Web and Mobile Applications"); 
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} /> 
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
