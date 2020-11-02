import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    BrowserRouter as Router,
    Route
  } from 'react-router-dom';
import { GlobalStyle } from './Components/globalStyles.js';
import Hero from './Components/HeroSection/Hero.js';
import Product from './Components/Products/Index.js';
import Dessert from './Components/Products/Desserts'
import {Data, DataTwo} from './Components/Products/Data'
import Features from './Components/Features/index.js';
import Footer from './Components/Footer/index.js';

AOS.init();

const App = () => {
    return (
        <Router>
            <GlobalStyle/>
         <Hero/>
         <Product heading='Choose your order' data={Data} />
         <Features/>
         <Dessert heading='Special sweets made with love' data={DataTwo} />
         <Footer />
        </Router>
    )
}

export default App
