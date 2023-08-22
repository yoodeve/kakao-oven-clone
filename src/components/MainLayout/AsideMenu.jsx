import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";

function AsideMenu(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const menuList = [
    {
      title: "나의 프로젝트",
      uri: "/",
    },
    {
      title: "나에게 공유된 프로젝트",
      uri: "/shared",
    },
  ];
  const onSharedClick = (uri) => {
    navigate(uri);
  };
  return (
    <main>
      <div>
        <aside>
          <ul>
            {menuList.map((e) => {
              return (
                <li
                  key={e.uri}
                  css={S.Menu}
                  className={e.uri === pathname ? "blue" : ""}
                  onClick={() => {
                    onSharedClick(e.uri);
                  }}
                >
                  {e.title}
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default AsideMenu;
