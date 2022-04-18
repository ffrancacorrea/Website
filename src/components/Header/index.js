import React from "react";
import NavigationBar from "./NavigationBar";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 100vh;
`;
const Header = () => {
  return (
    <Wrapper>
      <NavigationBar></NavigationBar>
    </Wrapper>
  );
};

export default Header;
