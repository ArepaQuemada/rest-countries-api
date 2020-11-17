import { useContext } from "react";
import { ModeContext } from "../context/context-mode";
import { capitalize } from "../utils";
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

const MoonDiv = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.5;
  }
`;

export default function Header() {
  const [mode, setMode] = useContext(ModeContext);

  const handleClick = () => {
    setMode({ color: mode.color === "ligth" ? "dark" : "ligth" });
  };

  return (
    <HeaderWrapper className="shadow">
      <TitleWrapper>
        <h1>Where in the world?</h1>
      </TitleWrapper>
      <MoonDiv onClick={handleClick}>
        <ion-icon name="moon-outline"></ion-icon>
      </MoonDiv>
      <span>{capitalize(mode.color)} Mode</span>
    </HeaderWrapper>
  );
}
