import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 334px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  position: relative;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

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

  .titleInput {
    width: 100%;
    height: 32px;
    background: #ffffff;
    border: 1px solid #777777;
    border-radius: 8px;
    margin-bottom: 24px;
  }

  .contentInput {
    width: 100%;
    height: 74px;
    background: #ffffff;
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

  .contentInput::placeholder {
    position: absolute;
    padding-top: 7px;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 24px;

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
  cursor: pointer;
`;
