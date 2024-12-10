import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import NavbarMobile from './Components/NavbarMobile/NavbarMobile';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Choice from './Components/Choice/Choice';
import Gallary from './Components/Gallary/Gallary';
import Contact from './Components/Contact/Contact';
import BlogCard from './Components/BlogCard/BlogCard';
import ContactDown from './Components/ContactDown/ContactDown'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Hero />
      <About />
      <Choice />
      <Gallary />
      <Contact />
      <BlogCard />
      <ContactDown />
      <Footer />
    </div>
  );
}

export default App;
