import styled from "@emotion/styled";
import project_1 from "../../assets/images/project-1.PNG";
import project_2 from "../../assets/images/project-2.PNG";
import project_3 from "../../assets/images/project-3.PNG";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`;
const Title = styled.h1`
  text-align: right;
  margin-right: 25%;
`;
const Cards = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  margin: 5%;
  div:first-of-type {
    margin-left: 20%;
  }
  div:nth-of-type(2) {
    margin-left: 40%;
    margin-top: 300px;
  }
  div:nth-of-type(3) {
    margin-left: 25%;
    margin-top: 650px;
  }
`;
const Card = styled.div`
  background-image: ${({ image }) =>
    `linear-gradient(to bottom,  rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 1%;
  :hover {
    transform: scale(1.2);
    transition: 0.7s;
  }
  p {
    text-align: center;
    padding-top: 10px;
    color: white;
  }
`;
const Projects = () => {
  return (
    <Wrapper id="Projects">
      <Title>Projects</Title>
      <Cards>
        <Card width="500px" height="250px" image={project_1}></Card>
        <Card width="600px" height="300px" image={project_2}>
          <p>IN PROGRESS</p>
        </Card>
        <Card width="500px" height="250px" image={project_3}></Card>
      </Cards>
    </Wrapper>
  );
};

export default Projects;
