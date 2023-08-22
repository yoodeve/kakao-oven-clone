import React from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { AiTwotoneSetting } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { ImClock } from "react-icons/im";

function BoardTypeContent({ dummyContent }) {
  return (
    <div css={S.ContentContainer}>
      <div className="content-sub-wrap">
        {dummyContent.map((e) => {
          return (
            <div css={S.WireFrameItem}>
              <div className="content-header">
                <input checked={e.complete} type="checkbox" />
                <div>
                  <AiTwotoneSetting />
                  <GoTriangleDown />
                </div>
              </div>
              <div className="img-box">
                <img src={e.imgSrc} alt="" />
              </div>
              <div className="caption-box">
                <h3 css={S.TitleBox}>{e.title}</h3>
                <p></p>
                <div>
                  <small className="info-box">
                    <ImClock />
                    <span>{e.updated}</span>
                  </small>
                  <div>
                    <span css={S.LabelBox}>특정유저만 테스트 허용</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BoardTypeContent;
