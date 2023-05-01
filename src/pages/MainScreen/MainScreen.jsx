import { Header, Main, Body } from "./style";
import MainScreenForm from "../../components/MainScreenForm/MainScreenForm";
import Post from "../../components/Post/Post";
import { useEffect, useState } from "react";

import axios from "axios";

export default function MainScreen() {
  const [postsData, setPostsData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const APIdata = await axios.get("https://dev.codeleap.co.uk/careers/");
      setPostsData(APIdata.data.results);
    };
    getData();
  }, []);

  return (
    <Main>
      <Header>CodeLeap Network</Header>
      <Body>
        <MainScreenForm></MainScreenForm>

        {!postsData ? (
          <h1>Sem posts no momento</h1>
        ) : (
          postsData.map(
            ({ id, username, created_datetime, title, content }) => (
              <Post
                key={id}
                id={id}
                title={title}
                username={username}
                date={created_datetime}
                content={content}
              />
            )
          )
        )}
      </Body>
    </Main>
  );
}
