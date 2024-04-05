import styled from "@emotion/styled"
import { motion } from "framer-motion"

import profilePic from "../../assets/images/profile-pic.PNG"
import html from "../../assets/logos/html.svg"
import css from "../../assets/logos/css.svg"
import js from "../../assets/logos/javascript.svg"
import react from "../../assets/logos/react.svg"
import python from "../../assets/logos/python.svg"
import git from "../../assets/logos/git.svg"
import mongodb from "../../assets/logos/mongodb.svg"
import postgresql from "../../assets/logos/postgresql.svg"
import docker from "../../assets/logos/docker.svg"
import typescript from "../../assets/logos/typescript.svg"
import vscode from "../../assets/logos/vscode.svg"
import flask from "../../assets/logos/flask.svg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`
const Title = styled.h1`
  margin-left: 25%;
`
const Content = styled.div`
  display: flex;
  margin-bottom: 100px;
`
const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5%;
  text-align: justify;
  h2 {
    color: ${({ theme }) => theme.secondaryColor};
  }
  p {
    text-align: right;
    margin-top: -3%;
  }
`
const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  img {
    width: 50px;
    height: 50px;
    filter: grayscale(100%);
  }
  img:hover {
    filter: none;
    transform: scale(1.3);
    transition: 0.5s;
  }
`
const Line = styled.div`
  border-left: ${({ theme }) => `6px solid ${theme.secondaryColor}`};
  border-radius: 95% 45% 45% 95%;
  height: 500px;
  margin-top: 30px;
`
const Photo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  img {
    clip-path: ellipse(59% 45% at 27% 54%);
  }
`
const Logo = ({ src, isBlack, darkMode }) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        filter: isBlack && darkMode && "invert(1)",
      }}
    />
  )
}
const About = ({ darkMode }) => {
  return (
    <Wrapper id="About">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1.5 }}
        style={{
          height: "100%",
        }}
      >
        <Title>About me</Title>
        <Content>
          <Presentation>
            <h2>Hi, I'm Fernanda</h2>
            <h3>
              and I'm a full stack developer. This website was created to
              showcase some of my skills and projects. You can see the
              technologies I most frequently use bellow.
            </h3>
            <p>hover over them, it feels good 😉</p>
            <Logos>
              <Logo src={html} alt="" darkMode={darkMode} />
              <Logo src={css} alt="" darkMode={darkMode} />
              <Logo src={js} alt="" darkMode={darkMode} />
              <Logo src={react} alt="" darkMode={darkMode} />
              <Logo src={python} alt="" darkMode={darkMode} />
              <Logo src={flask} alt="" darkMode={darkMode} isBlack={true} />
            </Logos>
            <Logos>
              <Logo src={mongodb} alt="" darkMode={darkMode} />
              <Logo src={typescript} alt="" darkMode={darkMode} />
              <Logo src={postgresql} alt="" darkMode={darkMode} />
              <Logo src={git} alt="" darkMode={darkMode} />
              <Logo src={docker} alt="" darkMode={darkMode} />
              <Logo src={vscode} alt="" darkMode={darkMode} />
            </Logos>
          </Presentation>
          <Photo>
            <Line></Line>
            <img src={profilePic} alt="" />
          </Photo>
        </Content>
      </motion.div>
    </Wrapper>
  )
}

export default About
