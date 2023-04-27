import { Section, SectionContent, Button } from "./style";
import { useState } from "react";

export default function MainScreenForm() {
  const [title, setTitle] = useState({});
  const [content, setContent] = useState({});
  const [isEnabled, setIsEnabled] = useState(false);

  function changeColor(data, type) {
    if (type === "title") {
      setTitle(data);
      setIsEnabled(true);
    } else {
      setContent(data);
      setIsEnabled(true);
    }
  }

  return (
    <Section>
      <form action="">
        <SectionContent>
          <h1>What’s on your mind?</h1>
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
