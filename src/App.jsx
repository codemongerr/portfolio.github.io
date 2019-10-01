import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./abstract/Styles/GlobalStyle";
import dark from "./abstract/theme";
import Banner from "./components/Banner";
import {
  SectionBlue,
  SectionGreen,
  SectionOrange,
  SectionHeading,
  SectionList,
  SectionListItem,
  SectionListItemTitle,
  SectionListItemDetail
} from "./components/Section";
import projects from "./abstract/data/projects.json";
import skills from "./abstract/data/skills.json";
import ReactGA from "react-ga";

function App(props) {
  ReactGA.initialize("UA-143436222-1");
  ReactGA.pageview("/");
  return (
    <ThemeProvider theme={dark}>
      <Fragment>
        <GlobalStyle />
        <Banner />
        <SectionGreen id="about">
          <SectionHeading>About Me And My Current Work</SectionHeading>
          <SectionList>
            <SectionListItem fill={true}>
              <SectionListItemDetail>
                <p>
                  Kia ora! I’m Talwinder Singh a Full Stack developer based in
                  Auckland.
                </p>
                <p>
                  From writing plain HTML pages for my college assignment to
                  building modern UI and web applications using new methods and
                  technology, I've build and contributed to many projects and
                  made difference to users and their businesses. The development
                  and delivery section is really important to me, because I
                  thereby constantly improve my skills and stay up-to-date with
                  new methods and technology to provide best solutions to users.
                </p>
                <p>
                  As a Full Stack developer, currently I'm contributing to a
                  reservation system (
                  <a href="https://www.resbook.com" target="_blank">
                    ResBook
                  </a>
                  ) which provides reservation management solution to users
                  across the globe.
                </p>
              </SectionListItemDetail>
            </SectionListItem>
          </SectionList>
        </SectionGreen>
        <SectionBlue id="work">
          <SectionHeading>My Work</SectionHeading>
          <SectionList>
            {projects.map(project => (
              <SectionListItem key={project.id}>
                <SectionListItemTitle>
                  <a href={project.uri} target="_blank">
                    {project.title}
                  </a>{" "}
                  ({project.infoText})
                </SectionListItemTitle>
                <SectionListItemDetail>
                  {project.description}
                </SectionListItemDetail>
              </SectionListItem>
            ))}
          </SectionList>
        </SectionBlue>
        <SectionOrange id="expertise">
          <SectionHeading>Area of expertise</SectionHeading>
          <SectionList>
            {skills.map(skill => (
              <SectionListItem>
                <SectionListItemTitle>
                  <span>{skill.title}</span>
                </SectionListItemTitle>
                <SectionListItemDetail>
                  {skill.list.join(", ")}
                </SectionListItemDetail>
              </SectionListItem>
            ))}
          </SectionList>
        </SectionOrange>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
