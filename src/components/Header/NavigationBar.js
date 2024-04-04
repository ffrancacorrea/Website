import React from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"
import ThemeSelector from "./ThemeSelector"

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  justify-content: space-between;
  width: 100%;
  font-size: 25px;
`
const NavigationMain = styled.div`
  margin: 25px;
  margin-left: 5%;
  flex: 1;
  margin: 30px;
`
const NavigationLinks = styled.div`
  display: flex;
  flex: 1;
  margin: 25px;
  justify-content: space-around;
`
const NavigationItems = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavigationItem = styled.a`
  display: flex;
  margin: 0 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.color};
`

const NavigationBar = ({ handleDarkMode, darkMode }) => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, transform: "translate(-10px,-10px)" }}
        animate={{
          opacity: 1,
          transform: "translateY(0)",
        }}
        transition={{ duration: 1 }}
      >
        <NavigationMain>Fernanda</NavigationMain>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, transform: "translate(10px,-10px)" }}
        animate={{
          opacity: 1,
          transform: "translateY(0)",
        }}
        transition={{ duration: 1 }}
      >
        <NavigationLinks>
          <NavigationItems>
            <NavigationItem href="#About">About</NavigationItem>
            <NavigationItem href="#Projects">Projects</NavigationItem>
          </NavigationItems>
          <ThemeSelector
            handleDarkMode={handleDarkMode}
            darkMode={darkMode}
          ></ThemeSelector>
        </NavigationLinks>
      </motion.div>
    </Wrapper>
  )
}

export default NavigationBar
