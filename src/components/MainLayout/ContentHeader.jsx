import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import { useRecoilState } from "recoil";
import { rc_checked } from "../../store/main";

function ContentHeader(props) {
  const [check, setChecked] = useRecoilState(rc_checked);
  const radioOnChange = ({ target }) => {
    const { id } = target;
    setChecked({
      ...check,
      type: id,
    });
  };
  return (
    <div css={S.ContentHeader}>
        <span className="dash-title">프로젝트 대쉬보드</span>
        <div className="dash-icons">
          <div className="input-wrap">
            <input type="text" placeholder="프로젝트 검색" />
            <span>
              <AiOutlineSearch />
            </span>
          </div>
          <div css={S.ButtonWrap}>
            <input
              onChange={radioOnChange}
              checked={check.type === "column" || false}
              css={S.Input}
              id="column"
              className="first"
              name="type"
              type="radio"
            />
            <label css={S.ButtonLabel} htmlFor="column">
              <TfiMenuAlt />
            </label>
            <input
              onChange={radioOnChange}
              checked={check.type === "board" || false}
              css={S.Input}
              id="board"
              className="second"
              name="type"
              type="radio"
            />
            <label css={S.ButtonLabel} htmlFor="board">
              <BiSolidDashboard />
            </label>
          </div>
        </div>
      </div>
  );
}

export default ContentHeader;