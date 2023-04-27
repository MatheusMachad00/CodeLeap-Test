import { Header, Main, Body } from "./style";
import MainScreenForm from "../../components/MainScreenForm/MainScreenForm";
import Post from "../../components/Post/Post";

export default function MainScreen() {
  return (
    <Main>
      <Header>CodeLeap Network</Header>
      <Body>
        <MainScreenForm></MainScreenForm>
        <Post></Post>
      </Body>
    </Main>
  );
}
