import { Header, Main } from "./style";
import MainScreenForm from "../../components/MainScreenForm/MainScreenForm";

export default function MainScreen() {
  return (
    <>
      <Header>CodeLeap Network</Header>
      <Main>
        <MainScreenForm></MainScreenForm>
      </Main>
    </>
  );
}
