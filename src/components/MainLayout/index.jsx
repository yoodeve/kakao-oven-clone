import React, { useEffect } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { Outlet } from "react-router-dom";
import BlackHeader from "./BlackHeader";
import ContentHeader from "./ContentHeader";
import AsideMenu from "./AsideMenu";
import Footer from "./Footer";

function MainLayout(props) {
  return (
    <>
      <BlackHeader />
      <ContentHeader />
      <div css={S.MainContent}>
        <AsideMenu />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
