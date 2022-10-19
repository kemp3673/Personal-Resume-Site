import React from 'react';
import { WorkHistoryData } from '../../Data/data';
import { HistoryContainer, HistoryContent, HistoryH1, HistoryWrapper, HistoryCard, HistoryIcon, HistoryH2, HistoryP, HistoryItems } from './workHistoryElements';


const WorkHistory = () => {
  return (
    <>
      <HistoryContainer id="employmentHistory">
        <HistoryContent>
          <HistoryH1>Employment History</HistoryH1>
          <HistoryItems>
            {WorkHistoryData.map((job) => {
              return (
                <HistoryWrapper key={`${job.company}${job.year}`}>
                  <HistoryCard>
                    <HistoryIcon src={job.image} />
                    <HistoryH2>{job.company}</HistoryH2>
                    <HistoryH2 style={{ textAlign: 'left' }}>{job.position}</HistoryH2>
                    <HistoryP>{job.year}</HistoryP>
                    <HistoryP>{job.description}</HistoryP>
                  </HistoryCard>
                </HistoryWrapper>
              )
            })}
          </HistoryItems>
        </HistoryContent>
      </HistoryContainer>
    </>
  )
};

export default WorkHistory;