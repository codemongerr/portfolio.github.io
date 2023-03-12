import PropTypes from 'prop-types';
import GridList from './GridList';
import Section from './Section';
import SectionDivider from './SectionDivider';
import ContentItem from './ContentItem';
import {prepareColorVar} from '../utils/helpers';

function Skills({data}) {
  return (
    <Section
      color="warningAlt"
      heading="Area of expertise"
      id="expertise"
      icon="tools"
      content={
        <GridList
          xs={12}
          sm={6}
          lg={4}
          data={data}
          renderItem={({list, title}) => (
            <ContentItem description={list.join(', ')} title={title} />
          )}
        />
      }
      divider={
        <SectionDivider
          colors={[
            'var(--bg-main)',
            prepareColorVar('warningAlt'),
            'var(--bg-main)',
          ]}
        />
      }
    />
  );
}

Skills.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Skills;
