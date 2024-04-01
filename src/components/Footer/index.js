import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>© 2024 Fernanda</p>
    </Wrapper>
  );
};

export default Footer;
