import React from 'react';
import Section from '../Section';
import SectionItem from '../SectionItem';

function About(props) {
  return (
    <Section color="green" heading="About Me" id="about">
      <SectionItem fluid color="green">
        <p>
          Kia ora! I&#39;m Talwinder Singh a web developer based in Auckland.
        </p>
        <p>
          From writing plain HTML pages for my college assignments to building
          modern UI and web applications, I&#39;ve built and contributed to many
          projects and made difference to users and their businesses. The
          development and delivery phase is really important to me, because I
          thereby constantly improve my skills and stay up-to-date with new
          methods and technology to provide best solutions to users.
        </p>
        <p>
          Currently I&#39;m contributing to a booking system which provides
          reservation management solution to users across the globe. As a Full
          Stack developer, I&#39;m responsible for creating API&#39;s and UI
          using React, CSS and HTML.
        </p>
      </SectionItem>
    </Section>
  );
}

export default About;
