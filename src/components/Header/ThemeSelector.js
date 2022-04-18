import styled from "@emotion/styled";

const Wrapper = styled.div`
  input {
    opacity: 0;
    position: absolute;
  }
  input:checked + label div {
    transform: translateX(24px);
  }
`;
const Selector = styled.label`
  background-color: ${({ theme }) => theme.inverseBackgroundColor};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 16px;
  width: 40px;
  transform: scale(1.2);
`;
const Dot = styled.div`
  background-color: ${({ theme }) => theme.dotColor};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;

const ThemeSelector = ({ handleDarkMode }) => {
  return (
    <Wrapper>
      <input
        type="checkbox"
        id="selector"
        onChange={(e) => handleDarkMode(e.target.checked)}
      />
      <Selector className="label" for="selector">
        {/* TODO: add icons**/}
        <Dot class="ball"></Dot>
      </Selector>
    </Wrapper>
  );
};

export default ThemeSelector;
