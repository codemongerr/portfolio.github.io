import React from 'react';
import Section from '../Section';
import SectionItem from '../SectionItem';

function About(props) {
  return (
    <Section color="green" heading="About me" id="about">
      <SectionItem fluid color="green">
        <p>
          Kia ora! I&#39;m Talwinder Singh, a Full Stack Engineer based in
          Auckland. I build and do rad web stuff.
        </p>
        <p>
          From writing plain HTML pages for my college assignments to building
          modern UIs and web applications, I&#39;ve built and contributed to
          many projects and have made a difference to the users and their
          businesses. The development and delivery phase is really important to
          me, because I thereby constantly improve my skills and stay up-to-date
          with new methods and technology to provide best solutions to users.
        </p>
        <p>
          Currently I am working for{' '}
          <a href="http://www.tenancy.co.nz" target="_blank" rel="noreferrer">
            tenancy.co.nz
          </a>
          . As a Full Stack Engineer I am responsible for creating and
          maintaining a UI components library, and UIs using React, APIs, and
          automated deployments for various property management applications. I
          am also working on contract based projects.
        </p>
      </SectionItem>
    </Section>
  );
}

export default About;
