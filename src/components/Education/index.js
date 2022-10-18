import React from 'react';

import HackReactor from '../../images/HackReactor.jpeg';
import APUS from '../../images/apus.png';

import { EducationContainer, EducationH1, EducationWrapper, EducationCard, EducationIcon, EducationH2, EducationP } from './educationElements';


const Education = () => {
  return (
    <>
      <EducationContainer id="education">
        <EducationH1>Education</EducationH1>
        <EducationWrapper>
          <EducationCard>
            <EducationIcon src={HackReactor} />
            <EducationH2>Hack Reactor</EducationH2>
            <EducationP>Advanced Software Engineering</EducationP>
            <EducationP>Graduated: August 2022</EducationP>
          </EducationCard>
          <EducationCard>
            <EducationIcon src={APUS} />
            <EducationH2>American Public University Systems</EducationH2>
            <EducationP>B.A.S. Technical Management: Project Management</EducationP>
            <EducationP>Graduated: February 2019</EducationP>
          </EducationCard>
        </EducationWrapper>
      </EducationContainer>
    </>
  )
}

export default Education;