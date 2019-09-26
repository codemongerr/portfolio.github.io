import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './abstract/Styles/GlobalStyle';
import dark from './abstract/theme';
import Banner from './components/Banner';
import { 
  SectionBlue, 
  SectionGreen, 
  SectionHeading,
  SectionList, 
  SectionListItem,
  SectionListItemTitle,
  SectionListItemDetail
} from './components/Section';
import projects from "./abstract/data/projects.json";
import skills from "./abstract/data/skills.json";
import ReactGA from 'react-ga';

function App(props) {
  ReactGA.initialize('UA-143436222-1');
  ReactGA.pageview("/");
  return (
    <ThemeProvider theme={dark}>
      <Fragment>
      <GlobalStyle />
      <Banner />
      <SectionBlue id="work">
        <SectionHeading>My Work</SectionHeading>
        <SectionList>
          {projects.map(project => (
            <SectionListItem>
              <SectionListItemTitle>
                <a href={project.uri} target="_blank">{project.title}</a> ({project.infoText})
              </SectionListItemTitle>
              <SectionListItemDetail>{project.description}</SectionListItemDetail>
            </SectionListItem>
          ))}
        </SectionList>
      </SectionBlue>
      <SectionGreen id="expertise">
        <SectionHeading>Area of expertise</SectionHeading>
        <SectionList>
          {skills.map(skill => (
            <SectionListItem>
              <SectionListItemTitle><span>{skill.title}</span></SectionListItemTitle>
              <SectionListItemDetail>{skill.list.join(', ')}</SectionListItemDetail>
            </SectionListItem>
          ))}
        </SectionList>
      </SectionGreen>
      </Fragment>
    </ThemeProvider>
  )
}

export default App;