import styled from "styled-components";

export const Modal = styled.div`
  width: 660px;
  height: 334px;
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
    padding: 24px 0 24px 24px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 24px;

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    margin-bottom: 8px;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #cccccc;
    padding-left: 9.56px;
  }

  .Content{
    margin-top: 24px;
  }

  .TitleInput{
    width: 100%;
    height: 32px;
    background: #ffffff;
    border: 1px solid #777777;
    border-radius: 8px;
  }

  .ContentInput {
    width: 100%;
    height: 74px;
    background: #ffffff;
    border: 1px solid #777777;
    border-radius: 8px;
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
  }

  .SaveButton {
    margin-left: 16px;
    background: #47B960;;
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
