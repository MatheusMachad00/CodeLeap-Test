import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 16px;
  position: relative;
  margin-top: 24px;
`;

export const PostTop = styled.div`
  background-color: #7695ec;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 16px 16px 0px 0px;

  header {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  img {
    width: 31.2px;
    height: 30px;
  }

  .trashButton {
    margin-right: 27.7px;
    height: 22.5px;
  }

  button{
  background-color: #7695ec;
  border: none;
}
`;

export const PostBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #777777;
  }

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #777777;
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    margin-top: 16px;
  }
`;
