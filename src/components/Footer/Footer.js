import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
         <LinkTitle>Call</LinkTitle>
         <LinkItem href='tel:080-547-324-99'>080-547-324-99</LinkItem>
        </LinkColumn>
        <LinkColumn>
         <LinkTitle>Email</LinkTitle>
         <LinkItem href='mailto:Gabrielonwe9@gmail.com'>Gabrielonwe9@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>You Think it..I build it</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/Onwegabriel'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://linkedin.com/onwegabriel'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com/officialonwe18'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      </SocialContainer> 
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
