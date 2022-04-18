import styled from "@emotion/styled";

import sun from "../../assets/icons/sun.gif";
import moon from "../../assets/icons/moon.gif";

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
  img {
    width: 20px;
    height: 20px;
  }
  img:first-child {
    width: 20px;
    height: 20px;
    display: ${({ darkMode }) => !darkMode && "none"};
  }
  img:last-child {
    background-color: ${({ theme }) => theme.inverseBackgroundColor};
    margin-left: 20px;
    filter: invert(100%);
    display: ${({ darkMode }) => darkMode && "none"};
  }
`;
const Dot = styled.div`
  background-color: ${({ theme }) => theme.dotColor};
  z-index: 1;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;

const ThemeSelector = ({ handleDarkMode, darkMode }) => {
  console.log(darkMode);
  return (
    <Wrapper>
      <input
        type="checkbox"
        id="selector"
        onChange={(e) => handleDarkMode(e.target.checked)}
      />
      <Selector className="label" for="selector" darkMode={darkMode}>
        <img src={sun} alt="" />
        <Dot class="ball"></Dot>
        <img src={moon} alt="" />
      </Selector>
    </Wrapper>
  );
};

export default ThemeSelector;
