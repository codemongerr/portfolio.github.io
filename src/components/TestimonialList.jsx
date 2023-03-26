import PropTypes from 'prop-types';
import GridList from './GridList';
import Section from './Section';
import SectionDivider from './SectionDivider';
import Testimonial from './Testimonial';
import {prepareColorVar} from '../utils/helpers';

function TestimonialList({data}) {
  return (
    <Section
      color="secondaryAlt"
      heading="What others have to say"
      id="testimonials"
      icon="comments"
      content={
        <GridList
          xs={12}
          // sm={6}
          data={data}
          renderItem={({description, name, position}) => (
            <Testimonial
              description={description}
              name={name}
              position={position}
            />
          )}
        />
      }
      divider={
        <SectionDivider
          colors={[
            'var(--bg-main)',
            prepareColorVar('secondaryAlt'),
            'var(--bg-main)',
          ]}
        />
      }
    />
  );
}

TestimonialList.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TestimonialList;
