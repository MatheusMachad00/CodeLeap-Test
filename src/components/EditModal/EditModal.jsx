import { Modal, Form, Buttons, BackgroundFade } from "./style";
export default function EditModal() {
  return (
    <BackgroundFade>
      <Modal>
        <h1>Edit item</h1>
        <Form>
          <div>
            <h2>Title</h2>
            <input type="text" placeholder="Hello world" className="TitleInput"/>
          </div>
          <div>
            <h2 className="Content">Content</h2>
            <input
              type="text"
              placeholder="Content here"
              className="ContentInput"
            />
          </div>
        </Form>
        <Buttons>
          <button>Cancel</button>
          <button className="SaveButton">Save</button>
        </Buttons>
      </Modal>
    </BackgroundFade>
  );
}
