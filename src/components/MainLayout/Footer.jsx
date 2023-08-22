import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./style";

function Footer(props) {
  return (
    <div css={S.FooterContainer}>
      <div className='footer-sub-wrap'>
        <ul>
          <span>Oven</span>
          <li>서비스 이용약관 및  운영원칙</li>
          <li className='bold'>개인정보처리방침</li>
        </ul>
        <div className='copyright'>&copy; 2015-2016 kakao Corp.</div>
      </div>
    </div>
  );
}

export default Footer;