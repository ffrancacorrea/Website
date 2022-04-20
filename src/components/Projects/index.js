import styled from "@emotion/styled";

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
`;
const Projects = () => {
  return (
    <Wrapper id="Projects">
      <Title>Projects</Title>
      <Cards>
        <Card width="500px" height="250px"></Card>
        <Card width="600px" height="300px"></Card>
        <Card width="500px" height="250px"></Card>
      </Cards>
    </Wrapper>
  );
};

export default Projects;
