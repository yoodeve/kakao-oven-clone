import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { ImClock } from "react-icons/im";
import { AiTwotoneSetting } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";

function ColumnTypeContent({ dummyContent }) {
  return (
    <div css={S.ColumnTypeContainer}>
      <div css={S.Overflow}>
        {dummyContent.map((e) => {
          return (
            <div css={S.ColumnContentItem}>
              <div className="input-wrap">
                <input type="checkbox" />
              </div>
              <img src="resources/image/dummyImg.png" alt="" />
              <div className="w_f">
                <h3 css={S.TitleBox}>{e.title}</h3>
                <div className="divider"></div>
                <small className="info-box">
                    <ImClock />
                  <div className="flex-box">
                    <span>{e.updated}</span>
                  </div>
                  <div className="column-label-wrap">
                    <span css={S.LabelBox}>특정유저만 테스트 허용</span>
                  </div>
                </small>
              </div>
              <div className="icon-boxes">
                <AiTwotoneSetting />
                <GoTriangleDown />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColumnTypeContent;
