import React from "react";
import * as S from "./style";
/** @jsxImportSource @emotion/react */
import { AiFillPlusCircle } from "react-icons/ai";
import {useLocation} from 'react-router-dom';

function ButtonHeader(props) {
  const location = useLocation();
  return (
    <div css={S.MainPageBtnWrap}>
      <button className="all-choice-btn">모두 선택</button>
      {location.pathname === '/' && <button className="create-btn">
        <div>
          <AiFillPlusCircle />
        </div>
        새로운 프로젝트 만들기
      </button>}
    </div>
  );
}

export default ButtonHeader;
