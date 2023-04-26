import { Header, Main, Body } from "./style";
import MainScreenForm from "../../components/MainScreenForm/MainScreenForm";

export default function MainScreen() {
  return (
    <Main>
      <Header>CodeLeap Network</Header>
      <Body>
        <MainScreenForm></MainScreenForm>
      </Body>
    </Main>
  );
}
