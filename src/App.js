import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import Routers from "./routers";
import { Reset } from "styled-reset";
import { css } from "@emotion/react";

function App() {
  return (
    <div css={CommonStyle}>
      <Reset />
      <Routers />
    </div>
  );
}

export default App;

const CommonStyle = css`
* {
  box-sizing: border-box;
  font-size: 14px;
}
`;