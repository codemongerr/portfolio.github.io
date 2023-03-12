import PropTypes from 'prop-types';
import GridList from './GridList';
import Section from './Section';
import SectionDivider from './SectionDivider';
import ContentItem from './ContentItem';
import {prepareColorVar} from '../utils/helpers';

function Work({data}) {
  return (
    <Section
      color="secondary"
      heading="My work"
      id="work"
      icon="suitcase"
      content={
        <GridList
          data={data}
          xs={12}
          sm={6}
          lg={4}
          renderItem={({description, infoText, url, title}) => (
            <ContentItem
              description={description}
              infoText={infoText}
              url={url}
              title={title}
            />
          )}
        />
      }
      divider={
        <SectionDivider
          colors={[
            'var(--bg-main)',
            prepareColorVar('secondary'),
            'var(--bg-main)',
          ]}
        />
      }
    />
  );
}

Work.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Work;
