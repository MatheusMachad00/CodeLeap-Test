import styled from "styled-components";

export const Modal = styled.div`
  width: 660px;
  height: 146px;
  background: #ffffff;
  border: 1px solid #999999;
  border-radius: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #000000;
    padding: 24px 0 40px 24px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 24px;
  bottom: 24px;

  button {
    background: #ffffff;
    border: 1px solid #999999;
    border-radius: 8px;
    width: 120px;
    height: 32px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
  }

  .DeleteButton {
    margin-left: 16px;
    background: #ff5151;
    color: #ffffff;
  }
`;

export const BackgroundFade = styled.div`
  background: rgba(119, 119, 119, 0.8);
  position: absolute;
  height: 100vh;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
`;
