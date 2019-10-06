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
          <SectionHeading>About Me</SectionHeading>
          <SectionList>
            <SectionListItem fluid={true}>
              <SectionListItemDetail>
                <p>
                  Kia ora! I’m Talwinder Singh a web developer based in
                  Auckland.
                </p>
                <p>
                  From writing plain HTML pages for my college assignments to
                  building modern UI and web applications, I've built and
                  contributed to many projects and made difference to users and
                  their businesses. The development and delivery section is
                  really important to me, because I thereby constantly improve
                  my skills and stay up-to-date with new methods and technology
                  to provide best solutions to users.
                </p>
                <p>
                  Currently I'm contributing to a reservation system which
                  provides reservation management solution to users across the
                  globe. As a Full Stack developer, I'm responsible for creating
                  API's and UI using React, CSS and HTML.
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
              <SectionListItem key={`skill-${skill.id}`}>
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
