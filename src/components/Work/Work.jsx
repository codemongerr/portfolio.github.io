import React from 'react';
import {uid} from 'react-uid';
import PropTypes from 'prop-types';
import Section from '../Section';
import SectionItem from '../SectionItem';

function Work({data}) {
  return (
    <Section color="blue" heading="My work" id="work">
      {data.map(project => (
        <SectionItem
          color="blue"
          key={uid(project)}
          title={project.title}
          url={project.uri}
          infoText={project.infoText}>
          {project.description}
        </SectionItem>
      ))}
    </Section>
  );
}

Work.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Work;
