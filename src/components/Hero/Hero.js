import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi all, I'm Bongani
      </SectionTitle>
      <SectionText>
      A passionate Front End Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/bkarabo754'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;