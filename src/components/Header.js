import { useContext } from "react";
import { ModeContext } from "../context/context-mode";
import { capitalize } from "../utils";
import moon from "../images/moon.svg";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const TitleWrapper = styled.div`
  flex-grow: 1;
  max-width: 85%;
`;

const MoonSvg = styled.img`
  cursor: pointer;
  width: 15px;
  margin-right: 8px;
  fill: blue;
`;

export default function Header() {
  const [mode, setMode] = useContext(ModeContext);

  const handleClick = () => {
    setMode({ color: mode.color === "ligth" ? "dark" : "ligth" });
  };

  return (
    <HeaderWrapper>
      <TitleWrapper>
        <h1>Where in the world?</h1>
      </TitleWrapper>
      <MoonSvg src={moon} alt="moon-icon" onClick={handleClick} />
      <span>{capitalize(mode.color)} Mode</span>
    </HeaderWrapper>
  );
}
