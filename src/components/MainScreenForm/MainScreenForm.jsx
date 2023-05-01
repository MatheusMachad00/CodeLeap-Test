import { Section, SectionContent, Button } from "./style";
import { useState } from "react";
import CreateNewPost from "../../actions/CreateNewPost";
import { useSelector } from "react-redux";

export default function MainScreenForm() {
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);
  const username = useSelector((state) => state.username.value);

  function changeColor(data, type) {
    if (type === "title") {
      setTitle(data);
      setIsEnabled(true);
    } else {
      setContent(data);
      setIsEnabled(true);
    }
  }

  function sendPost() {
    CreateNewPost(username, title, content);
  }

  return (
    <Section>
      <form onSubmit={sendPost}>
        <SectionContent>
          <h1>What's on your mind?</h1>
          <h2>Title</h2>
          <input
            type="text"
            placeholder="Hello world"
            className="titleInput"
            onChange={(e) => changeColor(e.target.value, "title")}
          />
          <h2>Content</h2>
          <input
            type="text"
            placeholder="Content here"
            className="contentInput"
            onChange={(e) => changeColor(e.target.value, "content")}
          />
        </SectionContent>
        <Button type="submit" isEnabled={isEnabled}>
          Create
        </Button>
      </form>
    </Section>
  );
}
