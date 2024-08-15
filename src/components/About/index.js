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
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
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
    margin-top: -2%;
    @media (max-width: 1024px) {
      display: none;
    }
  }
`
const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  img {
    width: 70px;
    height: 70px;
    @media (max-width: 1024px) {
      width: 50px;
      height: 50px;
    }
  }
  img:hover {
    transform: scale(1.3);
    transition: 0.5s;
  }
`
const Line = styled.div`
  border-left: ${({ theme }) => `6px solid ${theme.secondaryColor}`};
  border-radius: 95% 45% 45% 95%;
  margin-top: 30px;
`
const Photo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  img {
    clip-path: ellipse(59% 45% at 27% 54%);
  }
  @media (max-width: 1024px) {
    display: none;
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
            <p>you can hover over them if you feel like it 😉</p>
            <Logos>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Logo src={html} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.5 }}
              >
                <Logo src={css} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.7 }}
              >
                <Logo src={js} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.9 }}
              >
                <Logo src={react} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 1.1 }}
              >
                <Logo src={python} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 1.3 }}
              >
                <Logo src={flask} alt="" darkMode={darkMode} isBlack={true} />
              </motion.div>
            </Logos>
            <Logos>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.4 }}
              >
                <Logo src={mongodb} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.6 }}
              >
                <Logo src={typescript} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 0.8 }}
              >
                <Logo src={postgresql} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 1.0 }}
              >
                <Logo src={git} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 1.2 }}
              >
                <Logo src={docker} alt="" />
              </motion.div>
              <motion.div
                initial={{
                  filter: "grayscale(100%)",
                  transform: "translate(-20px, 40px)",
                }}
                whileInView={{
                  filter: "grayscale(20%)",
                  transform: "translate(0)",
                }}
                transition={{ duration: 1.4 }}
              >
                <Logo src={vscode} alt="" />
              </motion.div>
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
