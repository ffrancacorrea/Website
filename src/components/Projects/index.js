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
  height: 90vh;
`;
const Title = styled.h1`
  text-align: right;
  margin-right: 25%;
`;
const Cards = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  div:first-of-type {
    margin-left: -10%;
  }
  div:nth-of-type(2) {
    margin: -20px;
    margin-left: 40%;
  }
  div:nth-of-type(3) {
    margin-left: -20%;
  }
`;
const Card = styled.div`
  align-self: center;
  box-shadow: 0px 0px 6px #000;
  background-image: ${({ image }) =>
    `linear-gradient(to bottom,  rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`};
  background-size: cover;
  background-position: center;
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
        <Card
          width="250px"
          height="400px"
          image={project_2}
          onClick={(e) =>
            window.open(
              "https://github.com/ffrancacorrea/climbing-blog",
              "_blank"
            )
          }
        ></Card>
        <Card
          width="500px"
          height="250px"
          image={project_1}
          onClick={(e) =>
            window.open(
              "https://github.com/ffrancacorrea/house-design-gallery",
              "_blank"
            )
          }
        ></Card>
        <Card
          width="500px"
          height="250px"
          image={project_3}
          onClick={(e) =>
            window.open("https://github.com/ffrancacorrea/movieApp", "_blank")
          }
        ></Card>
      </Cards>
    </Wrapper>
  );
};

export default Projects;
