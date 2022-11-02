import React from 'react';
import {uid} from 'react-uid';
import PropTypes from 'prop-types';
import Icon from './Icon';
import Section from './Section';
import SectionItem from './SectionItem';
import {StyledText} from './TestimonialList.styled';

function TestimonialList({data}) {
  return (
    <Section
      color="lightblue"
      heading="What others have to say"
      id="testimonials">
      {data.map(item => (
        <SectionItem fluid color="blue" key={uid(item)}>
          <StyledText italic>
            <StyledText color="lightblue" inline>
              <Icon name={['fa', 'quote-left']} />
            </StyledText>{' '}
            {item.description}{' '}
            <StyledText color="lightblue" inline>
              <Icon name={['fa', 'quote-right']} />
            </StyledText>
          </StyledText>
          <StyledText color="lightblue">
            - {item.name}, {item.position}
          </StyledText>
        </SectionItem>
      ))}
    </Section>
  );
}

TestimonialList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TestimonialList;
