import styled from "@emotion/styled"
import { motion } from "framer-motion"
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.secondaryColor};
  }
`

const Footer = () => {
  return (
    <Wrapper>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(100px)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1.5 }}
        style={{
          height: "100%",
        }}
      >
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/ffrancacorrea"
            target="_blank"
            rel="noopener"
          >
            ME
          </a>{" "}
          © 2024
        </p>
      </motion.div>
    </Wrapper>
  )
}

export default Footer
