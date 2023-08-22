import { css } from "@emotion/react";

export const W_F = css`
  width: 100%;
`;

export const MainPageBtnWrap = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  .all-choice-btn {
    border-radius: 2px;
    height: 34px;
    width: fit-content;
    padding: 6px 12px;
    border: 1px solid rgb(204, 204, 204);
    background-color: #fff;
  }
  .create-btn {
    border-radius: 2px;
    height: 34px;
    width: 172px;
    padding: 6px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    background-color: rgb(52, 152, 219);
    border: 1px solid #357ebd;
  }
`;

export const ContentContainer = css`
  width: 100%;
  .content-sub-wrap {
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 15px;
    height: 490px;
    padding: 15px;
  }
`;

export const WireFrameItem = css`
  padding-top: 30px;
  margin-bottom: 20px;
  width: fit-content;
  height: fit-content;
  padding: 4px;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  .content-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #777;
  }
  .img-box img {
    width: 100%;
  }
  .caption-box {
    padding: 9px;
  }

  p {
    width: 100%;
    height: 36px;
    margin-bottom: 12px;
    border-bottom: 1px solid #ddd;
  }
  .info-box {
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 900;
    border-bottom: 8px solid transparent;
  }
  span {
    padding-left: 3px;
  }
`;

export const TitleBox = css`
  cursor: pointer;
  font-size: 24px;
  margin: 6px 0 10px;
  font-weight: 600;
  color: rgb(52, 152, 219);

  &:hover {
    color: #357ebd;
    text-decoration: underline;
  }
`;
export const LabelBox = css`
display: inline-block;
  width: 100%;
  font-size: 12px;
  width: auto;
  height: auto;
  background-color: rgb(240, 173, 78);
  color: #fff;
  padding: 2px 5px;
  border-radius: 3px;
`;
export const ColumnTypeContainer = css` 
  width: 100%;
  margin-bottom: 80px;
`;

export const Overflow = css`
  height: 610px;
  overflow-y: auto;
  margin: 20px auto 0;
`;

export const ColumnContentItem = css`
  position: relative;
  display: flex;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  width: 95%;
  height: fit-content;
  padding: 12px 6px;
  :nth-last-of-type(1) {
    border-bottom: 1px solid #ddd;
  }
  .input-wrap {
    display: flex;
    align-items: start;
  }
  img {
    width: 178px;
    height: 118px;
  }
  .info-box {
    margin: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .flex-box {
    word-break: keep-all;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: 600;
    }
  }
  .w_f {
    padding: 20px;
    width: 65%;
    small {
      display: flex;
      justify-content: space-between;
      .column-label-wrap {
        padding-right: 50%;
      }
    }
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }
  .icon-boxes {
    color: #777;
  }
`;
