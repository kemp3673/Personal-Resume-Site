import React from 'react';
import { SplashContainer, SplashContent, SplashH1, SplashP, SplashProfileImage, SplashLogo, SplashLink, BackgroundVideo } from './SplashElements';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import ProfileImage from '../../images/profile_pic.jpeg';
import Video from '../../Video/video.mp4';


const Splash = () => {
  return (
    <SplashContainer>
      <BackgroundVideo autoPlay loop muted src={Video} type='video/mp4' />
      <SplashContent>
        <SplashProfileImage src={ProfileImage} alt="Nicholas Kempkes" />
        <SplashH1>Nicholas Kempkes</SplashH1>
        <SplashP>
        Hello! I am a javascript developer that enjoys solving problems and learning. I spent six years in the military as a Geospatial Analyst before pursuing my education after my discharge. I love all things tech and can spend hours geeking out over new technologies. I am originally from Minnesota but have spent the last 10+ years moving around the country and currently reside near Nashville, TN. For hobbies, I enjoy resin 3D printing and occasionally playing video games as time allows.
        </SplashP>
        <SplashLogo>
          <SplashLink aria-label="Github Link" href="https://github.com/kemp3673" target="_blank"><FaGithub /></SplashLink>
          &nbsp;
          <SplashLink aria-label="LinkedIn Link" href="https://www.linkedin.com/in/nicholas-kempkes/" target="_blank"><GrLinkedin /></SplashLink>
        </SplashLogo>
      </SplashContent>
    </SplashContainer>
  )
}

export default Splash;