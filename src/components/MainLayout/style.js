import { css } from "@emotion/react";

export const HeaderContainer = css`
  width: 100%;
  background-color: #383d40;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  a {
    color: #fff;
  }
  .header-wrapper {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin: 0 auto;
    width: 1170px;
    a {
      color: #fff;
      display: flex;
      align-items: center;
      .logo {
        font-size: 22px;
        font-weight: 700;
        margin-left: 15px;
      }
      .small {
        height: 22px;
        /* line-height: 20px; */
        font-size: 11px;
        line-height: 12px;
        font-weight: 400;
        margin-left: 5px;
      }
    }
    .header-right-side {
      width: 110px;
      height: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      padding: 15px;
      img {
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
      }
      span {
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
`;

export const ContentHeader = css`
  margin-top: 71px !important;
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 9px;
  border-bottom: 1px solid #eee;
  .dash-title {
    font-size: 36px;
    font-weight: 500;
    padding: 20px 0 10px;
  }
  .dash-icons {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  .input-wrap {
    position: relative;
    input {
      height: 20px;
      width: 156px;
      border: 1px solid rgb(204, 204, 204);
      box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset;
      padding: 6px 42.5px 6px 12px;
      margin-right: 25px;
    }
    span {
      width: 34px;
      height: 34px;
      position: absolute;
      top: -2px;
      right: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const ButtonWrap = css`
  display: flex;
`;
export const ButtonLabel = css`
  width: 14px;
  height: 20px;
  padding: 6px 12px;
  border: 1px solid rgb(173, 173, 173);
  display: flex;
  align-items: center;
  :nth-last-of-type(1) {
    border-left: unset !important;
  }
`;

export const Input = css`
  display: none;
  &:checked + label {
    box-shadow: rgba(0, 0, 0, 0.125) 0px 3px 5px 0px inset;
    background-color: rgb(230, 230, 230);
  }
`;
export const MainContent = css`
  width: 1170px;
  margin: 20px auto 0;
  display: flex;
  aside {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    ul {
      margin: 0 15px;
    }
  }
`;

export const Menu = (path) => {
  return css`
    width: 232.5px;
    padding: 10px 15px;
    border-radius: 3px;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    background-color: #fff;
    color: rgb(51, 51, 51);
    font-weight: 500;
    cursor: pointer;
    &.blue {
      background-color: rgb(52, 152, 219);
      color: #fff;
    }
  `;
};

export const FooterContainer = css`
  width: 100%;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  .footer-sub-wrap {
    width: 1170px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    border-top: 1px solid #ddd;
  }
  ul {
    display: flex;
  }
  span {
    padding-right: 10px;
  }
  li {
    color: rgb(52, 152, 219);
    padding-right: 10px;
    &.bold {
      font-weight: 600;
    }
  }
`;
