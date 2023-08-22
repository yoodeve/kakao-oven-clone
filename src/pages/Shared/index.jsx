import React from 'react';
/** @jsxImportSource @emotion/react */
import ButtonHeader from '../Main/ButtonHeader'
import * as S from "../Main/style";
import * as T from "./Style";

function Shared(props) {
  return (
    <div css={S.W_F}>
      <ButtonHeader />
      <div css={T.ImgWrap}>
        <img src="https://t1.daumcdn.net/oven/web/542CF1754D191D002B" alt="" />
      </div>
    </div>
  );
}

export default Shared;