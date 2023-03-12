import Card from './Card';
import Section from './Section';
import SectionDivider from './SectionDivider';
import SocialIcons from './SocialIcons';
import Text from './Text';
import {prepareColorVar} from '../utils/helpers';

function Contact() {
  return (
    <Section
      color="warning"
      heading="Get in touch"
      id="contact"
      icon="envelope"
      content={
        <Card>
          <Text variant="subtitle1">
            Have an awesome idea for a website or an app? Like to see it on web?
            Lets get in touch and convert your rad idea into beautiful product
            for the world out there.
            <br />
            <br />
          </Text>
          <SocialIcons />
        </Card>
      }
      divider={
        <SectionDivider
          colors={[
            'var(--bg-main)',
            prepareColorVar('warning'),
            'var(--bg-main)',
          ]}
        />
      }
    />
  );
}

export default Contact;
