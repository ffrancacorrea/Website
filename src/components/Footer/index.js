import styled from "@emotion/styled"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.secondaryColor};
  width: 100%;
`

const Footer = () => {
  return (
    <Wrapper>
      <p>© 2024 Fernanda</p>
    </Wrapper>
  )
}

export default Footer
