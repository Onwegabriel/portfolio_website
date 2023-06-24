import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <link href="/" />
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom:"20px" }}>
          <DiCssdeck size= "3rem"/><Span>Onwe Gabriel</Span>
        </a>
      {/* </link> */}
    </Div1>
    <Div2>
      <li>
        <link href='../projects/project.js'/>
        <NavLink>Projects</NavLink>
      </li>
      <li>
        <link href='#tech'/>
        <NavLink>Technology</NavLink>
      </li>
      <li>
        <link href='#About'/>
        <NavLink>About</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='http://github.com/Onwegabriel'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://linkedin.com/onwegabriel'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://instagram.com/officailonwe18'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
