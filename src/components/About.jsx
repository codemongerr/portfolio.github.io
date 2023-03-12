import Section from './Section';
import SectionDivider from './SectionDivider';
import Text from './Text';
import {prepareColorVar} from '../utils/helpers';

function About() {
  return (
    <Section
      color="primary"
      heading="About me"
      id="about-me"
      icon="user"
      content={
        <Text as="div" variant="subtitle1">
          <Text>
            Kia ora! I&#39;m Talwinder Singh, Full Stack Engineer based in
            Auckland and I build rad web stuff.
          </Text>
          <Text>
            From writing plain HTML pages for my college assignments to building
            modern UIs and web applications, I&#39;ve built and contributed to
            many projects and have made a difference to the users and their
            businesses. The development and delivery phase is really important
            to me, because I thereby constantly improve my skills and stay
            up-to-date with new methods and technology to provide best solutions
            to users.
          </Text>
          <Text>
            Currently I am working for tenancy.co.nz. As a Full Stack Engineer I
            am responsible for creating and maintaining React UI components
            library and UIs, APIs, and automated deployments for various
            property management applications. I am also working on contract
            based projects.
          </Text>
        </Text>
      }
      divider={
        <SectionDivider
          colors={[
            'var(--bg-main)',
            prepareColorVar('primaryAlt'),
            'var(--bg-main)',
          ]}
        />
      }
    />
  );
}

export default About;
