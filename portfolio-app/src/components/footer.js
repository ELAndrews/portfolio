import React from "react";
import { FooterContainer, LinkContainer } from "../assets/styling/components/footerStyling";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Footer() {



  return (
    <FooterContainer>
      <LinkContainer>
        <a href="https://twitter.com/EmmaAndrews1990" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/emma-andrews-b26768169/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/ELAndrews" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto:emmaandrewsdev@gmail.com">
          <DraftsIcon />
        </a>
      </LinkContainer>
    </FooterContainer>
  );
}