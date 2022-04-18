import React from "react";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

import gitLogo from "../../assets/logos/git-logo.png";
import gmailLogo from "../../assets/logos/gmail-logo.png";
import linkedinLogo from "../../assets/logos/linkedin-logo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  font-style: italic;
  font-size: 30px;
  h2 {
    margin: 5px;
  }
`;
const Logos = styled.div`
  margin: 30px 0;
  img {
    animation-name: fade;
    animation-duration: 4s;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 0.3rem 0.5rem 0.4rem rgba(0, 0, 0, 0.3);
  }
  img:hover {
    transform: rotate(-20deg) scale(1.2);
    transition: 0.5s;
    box-shadow: 0.5 1rem 1rem rgba(0, 0, 0, 0.3);
  }
  a:not(:last-child) {
    margin-right: 30px;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <NavigationBar></NavigationBar>
      <Container>
        <h1>Full Stack Developer</h1>
        <h2>Born in Santos,</h2>
        <h2>located in Paris</h2>
        <Logos>
          <a href="mailto:ffrancacorrea@gmail.com">
            <img src={gmailLogo} alt="" />
          </a>
          <a href="https://github.com/ffrancacorrea">
            <img src={gitLogo} alt="" />
          </a>
          <a href="https://linkedin.com/in/ffrancacorrea/">
            <img src={linkedinLogo} alt="" />
          </a>
        </Logos>
      </Container>
    </Wrapper>
  );
};

export default Header;
