import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+233240376384">+233240376384</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:agbleyjill@gmail.com">
            agbleyjill@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Agbley">
            <a
              href="https://github.com/Agbley"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size="3rem" />
            </a>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/jill-agbley-a49b44138">
            <a
              href="https://www.linkedin.com/in/jill-agbley-a49b44138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size="3rem" />
            </a>
          </SocialIcons>
          <SocialIcons href="https://docs.google.com/spreadsheets/d/1L2JABXPIJyVm8FGA1gUAfBGD-dRZopmH4fYKLxjLUpU/edit?usp=sharing">
            <a
              href="https://docs.google.com/spreadsheets/d/1L2JABXPIJyVm8FGA1gUAfBGD-dRZopmH4fYKLxjLUpU/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGoogleCircle size="3rem" />
            </a>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
