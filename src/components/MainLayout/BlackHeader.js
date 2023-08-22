import React from 'react';
/** @jsxImportSource @emotion/react */
import { GoTriangleDown } from "react-icons/go";
import * as S from "./style";

function BlackHeader(props) {
  return (
    <div css={S.HeaderContainer}>
        <div className="header-wrapper">
          <a>
            <div className="logo">Oven</div>
            <div className="small">BETA</div>
          </a>
          <div className="header-right-side">
            <img
              src="https://www.gravatar.com/avatar/6693b94c644c62015c9094c644c762a4?d=retro"
              alt="프로필 이미지"
            />
            <span>janhold</span>
            <GoTriangleDown />
          </div>
        </div>
      </div>
  );
}

export default BlackHeader;