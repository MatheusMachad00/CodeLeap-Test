import styled from "styled-components";

export const PopUp = styled.div`
  width: 500px;
  height: 205px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const PopUpBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0 16px 24px;

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    padding-bottom: 24px;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 8px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 452px;
    height: 32px;
    border: 1px solid #777777;
    border-radius: 8px;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #cccccc;
    padding-left: 11.2px;
  }
`;

export const PopUpButton = styled.button`
  width: 111px;
  height: 32px;
  background: ${(props) => (props.isEnabled ? "#7695ec" : "grey")};
  border-radius: 8px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  position: absolute;
  left: 365px;
  right: 24px;
  cursor: pointer;
`;
