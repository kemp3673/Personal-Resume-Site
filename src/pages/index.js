import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Splash from '../components/Splash';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import WorkHistory from '../components/WorkHistory';
import Footer from '../components/Footer';
import MessageModal from '../components/messageModal';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
      console.log('close')
      setShowModal(current => !current);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle}/>
      <Contact toggleModal={toggleModal} showModal={showModal} />
      <MessageModal toggleModal={ toggleModal }  showModal={ showModal }/>
      <Splash />
      <Education />
      <Experience />
      <WorkHistory />
      <Footer />
    </>
  );
}

export default Home;