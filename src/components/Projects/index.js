import styled from "@emotion/styled"
import { motion } from "framer-motion"

import project_1 from "../../assets/images/project-1.PNG"
import project_2 from "../../assets/images/project-2.PNG"
import project_3 from "../../assets/images/project-3.PNG"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
`
const Title = styled.h1`
  text-align: right;
  margin-right: 25%;
`
const Cards = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`
const Card = styled.div`
  margin: 1%;
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
`
const Projects = () => {
  return (
    <Wrapper id="Projects">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          height: "100%",
        }}
      >
        <Title>Projects</Title>
        <Cards>
          <Card
            width="250px"
            height="400px"
            image={project_2}
            onClick={(e) =>
              window.open(
                "http://ffrancacorrea.github.io/climbing-blog",
                "_blank"
              )
            }
          ></Card>

          <Card
            width="250px"
            height="400px"
            image={project_3}
            onClick={(e) =>
              window.open(
                "https://ffrancacorrea.github.io/paris-travel/",
                "_blank"
              )
            }
          ></Card>
        </Cards>
        <Cards>
          <Card
            width="540px"
            height="250px"
            image={project_1}
            onClick={(e) =>
              window.open(
                "https://github.com/ffrancacorrea/house-design-gallery",
                "_blank"
              )
            }
          ></Card>
        </Cards>
      </motion.div>
    </Wrapper>
  )
}

export default Projects
