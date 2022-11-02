import React from 'react';
import {uid} from 'react-uid';
import PropTypes from 'prop-types';
import Section from './Section';
import SectionItem from './SectionItem';

function Skills({data}) {
  return (
    <Section color="orange" heading="Area of expertise" id="expertise">
      {data.map(skill => (
        <SectionItem color="orange" key={uid(skill)} title={skill.title}>
          {skill.list.join(', ')}
        </SectionItem>
      ))}
    </Section>
  );
}

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
