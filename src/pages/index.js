import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Splash from '../components/Splash';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import WorkHistory from '../components/WorkHistory';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <Splash />
      <Education />
      <Experience />
      <WorkHistory />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;