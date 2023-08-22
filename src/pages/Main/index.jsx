import React from "react";
import ButtonHeader from "./ButtonHeader";
import BoardTypeContent from "./BoardTypeContent";
import * as S from "./style";
import { rc_checked } from "../../store/main";
import { useRecoilValue } from "recoil";
import ColumnTypeContent from "./ColumnTypeContent";
/** @jsxImportSource @emotion/react */

function Main(props) {
  const type = useRecoilValue(rc_checked);
  const dummyContent = [
    {
      complete: false,
      title: "todo",
      imgSrc: "resources/image/dummyImg.png",
      updated: "18일 전",
      authLevel: 0,
    },
    {
      complete: true,
      title: "해커톤",
      imgSrc: "resources/image/dummyImg2.png",
      updated: "20일 전",
      authLevel: 1,
    },
    {
      complete: false,
      title: "해빗트래커",
      imgSrc: "resources/image/dummyImg2.png",
      updated: "2023년 6월 3일",
      authLevel: 0,
    },
    {
      complete: false,
      title: "빵",
      imgSrc: "resources/image/dummyImg.png",
      updated: "2022년 11월 22일",
      authLevel: 1,
    },
    {
      complete: false,
      title: "플젝1",
      imgSrc: "resources/image/dummyImg.png",
      updated: "2021년 12월 22일",
      authLevel: 1,
    },
    {
      complete: false,
      title: "miniProject",
      imgSrc: "resources/image/dummyImg2.png",
      updated: "2021년 2월 22일",
      authLevel: 1,
    },
    {
      complete: false,
      title: "웹미니프로젝트",
      imgSrc: "resources/image/dummyImg.png",
      updated: "2020년 2월 22일",
      authLevel: 1,
    },
  ];
  return (
    <div css={S.W_F}>
      <ButtonHeader />
      {type.type === "board" ? (
        <BoardTypeContent dummyContent={dummyContent} />
      ) : (
        <ColumnTypeContent dummyContent={dummyContent} />
      )}
    </div>
  );
}

export default Main;
