import { Section, SectionContent, Button } from "./style";

export default function MainScreenForm() {
  return (
    <Section>
      <SectionContent>
        <h1>What’s on your mind?</h1>
        <h2>Title</h2>
        <input type="text" placeholder="Hello world" className="titleInput" />
        <h2>Content</h2>
        <input
          type="text"
          placeholder="Content here"
          className="contentInput"
        />
      </SectionContent>
      <Button>Create</Button>
    </Section>
  );
}
