import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Splash from '../components/Splash';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

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
      <Contact />
    </>
  );
}

export default Home;