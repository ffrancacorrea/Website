import React from "react"
import NavigationBar from "./NavigationBar"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import gitLogo from "../../assets/logos/git-logo.png"
import gmailLogo from "../../assets/logos/gmail-logo.png"
import linkedinLogo from "../../assets/logos/linkedin-logo.png"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 100vh;
  h2:first-of-type {
    color: ${({ theme }) => theme.secondaryColor};
  }
`
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
`
const Logos = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
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
  div:not(:last-child) {
    margin-right: 30px;
  }
`
const Header = ({ handleDarkMode, darkMode }) => {
  return (
    <Wrapper>
      <NavigationBar
        handleDarkMode={handleDarkMode}
        darkMode={darkMode}
      ></NavigationBar>
      <Container>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(50px)" }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
          }}
          transition={{ duration: 0.7 }}
        >
          <h1>Fernanda</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: "translateY(100px)" }}
          animate={{
            opacity: 1,
            transform: "translateY(0)",
          }}
          transition={{ duration: 1 }}
        >
          <h2>Full Stack Developer</h2>
          <h2>Born in Santos, located in Paris</h2>
        </motion.div>
        <Logos>
          <motion.div
            initial={{ opacity: 0, transform: "translate(-50%,150%)" }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            transition={{ duration: 1 }}
          >
            <a href="mailto:ffrancacorrea@gmail.com">
              <img src={gmailLogo} alt="" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(200px)" }}
            animate={{
              opacity: 1,
              transform: "translate(0,0)",
            }}
            transition={{ duration: 0.8 }}
          >
            <a
              href="https://github.com/ffrancacorrea"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitLogo} alt="" />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, transform: "translate(100%,250%)" }}
            animate={{
              opacity: 1,
              transform: "translateY(0)",
            }}
            transition={{ duration: 1.2 }}
          >
            <a
              href="https://linkedin.com/in/ffrancacorrea/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinLogo} alt="" />
            </a>
          </motion.div>
        </Logos>
      </Container>
    </Wrapper>
  )
}

export default Header
