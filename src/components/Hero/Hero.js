import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio Website!
      </SectionTitle>
      <SectionText>
        I'm Onwe Gabriel, an experienced and passionate wed developer with 5years of experience
        in building robust and innovative ditital solutions. <br/> I'm a fullstack developer, leveraging
        my skills in <br/>. HTML<br/>. BOOTSRAP 4,5<br/>. CSS<br/>. TAILWIND<br/>. JAVASCRIPT 
        <br/>. PHP <br/>. NODE<br/>. SWIFT <br/> To create visually appealing,complex and user-friendly
        web applicatons
        <h1>Experience And Expertise</h1>
        Throughout my career, i have worked on diverse range of projects,both with start-ups companies and
        also as a freelancer, collaborating with clients and teams from various industries.<br/>From designing
        landing pages to developing complex and authentic web applications, which has helped in honing my skills
        in translating ideas into functional and aesthetically pleasing web applications.My expertise include
        <br/>..Experience with[React, Angular, Next.js, Laravel, Vue.js], empowering me to build dynamic,complex
        and user-friendly web applications. <br/>..Strong Knowledge of responsive web design principal, ensuring
        seamless experiences across devices and screen.<br/>..Farmiliarity with version control systems like Git,
        facilitating efficeint collaboration and code management.
      </SectionText>
      <Button onclick={() => window.location ='http://youtube.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;