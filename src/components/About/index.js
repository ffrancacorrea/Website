import styled from "@emotion/styled";
import profilePic from "../../assets/images/profile-pic.PNG";
import html from "../../assets/logos/html.svg";
import css from "../../assets/logos/css.svg";
import js from "../../assets/logos/javascript.svg";
import react from "../../assets/logos/react.svg";
import python from "../../assets/logos/python.svg";
import git from "../../assets/logos/git.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`;
const Title = styled.h1`
  margin-left: 25%;
`;
const Content = styled.div`
  display: flex;
  margin-bottom: 100px;
`;
const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5%;
  text-align: justify;
  h2 {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
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
`;
const Line = styled.div`
  border-left: ${({ theme }) => `6px solid ${theme.secondaryColor}`};
  border-radius: 95% 45% 45% 95%;
  height: 500px;
  margin-top: 30px;
`;
const Photo = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  img {
    clip-path: ellipse(59% 45% at 27% 54%);
  }
`;

const About = () => {
  return (
    <Wrapper id="About">
      <Title>About me</Title>
      <Content>
        <Presentation>
          <h2>Hi, I'm Fernanda</h2>
          <h3>
            and I'm a full stack developer Ea dolor occaecat consectetur commodo
            nostrud veniam pariatur ad id. Ut eiusmod nulla ullamco nulla
            deserunt nostrud magna. Sunt pariatur cillum officia qui voluptate
            anim tempor et. Ex sint nostrud minim et et incididunt. Consequat
            pariatur tempor et magna duis. Enim duis magna excepteur pariatur
            amet ullamco anim laborum veniam sint anim ad ad pariatur.
          </h3>
          <Logos>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={python} alt="" />
            <img src={git} alt="" />
          </Logos>
        </Presentation>
        <Photo>
          <Line></Line>
          <img src={profilePic} alt="" />
        </Photo>
      </Content>
    </Wrapper>
  );
};

export default About;
