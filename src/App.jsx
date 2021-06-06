import React from 'react';
import ReactGA from 'react-ga';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './abstract/Styles/GlobalStyle';
import dark from './abstract/theme';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Work from './components/Work';
import projects from './abstract/data/projects.json';
import skills from './abstract/data/skills.json';

function App() {
  ReactGA.initialize('UA-143436222-1');
  ReactGA.pageview('/');
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Banner />
      <About />
      <Work data={projects} />
      <Skills data={skills} />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
