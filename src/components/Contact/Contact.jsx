import React from 'react';
import Section from '../Section';
import SectionItem from '../SectionItem';
import SocialIcons from '../SocialIcons';

function Contact(props) {
  return (
    <Section color="yellow" heading="Get in touch" id="contact">
      <SectionItem fluid color="yellow">
        <p style={{marginTop: 0, marginBottom: 20, lineHeight: 1.6}}>
          Have an awesome idea for a website or app? Like to see it on web?
          <br />
          Lets get in touch and convert your awesome idea into beautiful website
          or app for the world out there.
        </p>
        <SocialIcons />
      </SectionItem>
    </Section>
  );
}

export default Contact;
