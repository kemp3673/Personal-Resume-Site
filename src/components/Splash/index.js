import React from 'react';
import { SplashContainer, SplashContent, SplashH1, SplashP, SplashProfileImage, SplashLogo, SplashLink } from './SplashElements';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import ProfileImage from '../../images/profile_pic.jpeg';


const Splash = () => {
  return (
    <SplashContainer>
      <SplashContent>
      <SplashProfileImage src={ProfileImage} alt="Nicholas Kempkes" />
        <SplashH1>Nicholas Kempkes</SplashH1>
        <SplashP>
          I am a full stack javascript developer with a passion for creating beautiful and functional websites. I am currently looking for a position where I can utilize my skills and grow as a developer. I am a quick learner and I am always looking for new ways to improve my skills. I am a team player and I am always willing to help others. I am a hard worker and I am always looking for new challenges. I am a problem solver and I am always looking for new ways to solve problems.
        </SplashP>
        <SplashLogo>
          <SplashLink href="https://github.com/kemp3673"><FaGithub/></SplashLink>
          &nbsp;
          <SplashLink href="https://www.linkedin.com/in/nicholas-kempkes/"><GrLinkedin/></SplashLink>
        </SplashLogo>
      </SplashContent>
    </SplashContainer>
  )
}

export default Splash;