import React from "react";
import styled from "@emotion/styled";
import ThemeSelector from "./ThemeSelector";

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor};
  justify-content: space-around;
  width: 100%;
  font-size: 25px;
`;
const NavigationMain = styled.div`
  margin: 25px;
  margin-left: 5%;
  flex: 1;
`;
const NavigationLinks = styled.div`
  display: flex;
  flex: 1;
  margin: 25px;
  justify-content: space-around;
`;
const NavigationItems = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NavigationItem = styled.a`
  display: flex;
  margin: 0 30px;
  text-decoration: none;
  color: inherit;
`;

const NavigationBar = ({ handleDarkMode, darkMode }) => {
  return (
    <Wrapper>
      <NavigationMain>Fernanda</NavigationMain>
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
    </Wrapper>
  );
};

export default NavigationBar;
