import React from 'react';
import { EducationData } from '../../Data/data.js';
import HackReactor from '../../images/HackReactor.jpeg';
import APUS from '../../images/apus.png';

import { EducationContainer, EducationH1, EducationWrapper, EducationCard, EducationIcon, EducationH2, EducationP, EducationContent, InnerCard } from './educationElements';


const Education = () => {
  return (
    <>
    <EducationContainer id="education">
    <EducationContent>
    <EducationH1>Education</EducationH1>
    </EducationContent>
      <EducationContent>
      {EducationData.map((education) => {
        return (
          <EducationWrapper key={`${education.degree}${education.year}`}>
            <EducationCard>
              <EducationIcon src={education.image} />
              {/* <EducationH2>{education.school}</EducationH2> */}
              <InnerCard>
                <EducationP>{education.degree}</EducationP>
                <EducationP>{education.year}</EducationP>
              </InnerCard>
            </EducationCard>
          </EducationWrapper>
        )
      })}
      </EducationContent>
    </EducationContainer>
    </>
  )
}

export default Education;