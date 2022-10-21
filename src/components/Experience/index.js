import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { ExperienceContainer, ExperienceH1, ExperienceContent } from './experienceElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import './experience.css';
import Atelier from '../../images/Atelier.jpg';
import Himalia from '../../images/Himalia.jpg';
import GreenHorn from '../../images/GreenHorn.jpg';
import SEIR from '../../images/SEIR.jpg';

function Experience() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <ExperienceContainer id="experience">
        <ExperienceContent>
          <ExperienceH1>Experience</ExperienceH1>
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
        </ExperienceContent>
      </ExperienceContainer>
    </>
  );
}

export default Experience;