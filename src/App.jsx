import React from 'react';
import ReactGA from 'react-ga';
import {ThemeProvider} from 'styled-components';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import GlobalStyle from './components/GlobalStyle';
import Skills from './components/Skills';
import TestimonialList from './components/TestimonialList';
import Work from './components/Work';
import projects from './json/projects.json';
import reviews from './json/reviews.json';
import skills from './json/skills.json';
import info from './json/info.json';
import dark from './theme';
import BannerImage from './assets/images/banner.jpg';

function App() {
  ReactGA.initialize('UA-143436222-1');
  ReactGA.pageview('/');
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Banner src={BannerImage} info={info} />
      <About />
      <Work data={projects} />
      <Skills data={skills} />
      <TestimonialList data={reviews} />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
