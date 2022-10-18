import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { ExperienceContainer, ExperienceH1 } from './experienceElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import './experience.css';
import Atelier from '../../images/Atelier.png';
import Himalia from '../../images/Himalia.png';
import GreenHorn from '../../images/GreenHorn.png';
import SEIR from '../../images/SEIR.png';

function Experience() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <ExperienceH1>Experience</ExperienceH1>
      <ExperienceContainer id="experience">
        <Carousel className='carousel-fade' activeIndex={index} onSelect={handleSelect} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SEIR}
              alt="SEIR"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={GreenHorn}
              alt="GreenHorn"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Atelier}
              alt="Atelier"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Himalia}
              alt="Himalia"
            />
          </Carousel.Item>
        </Carousel>
      </ExperienceContainer>
    </>
  );
}

export default Experience;