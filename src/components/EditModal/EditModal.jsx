import { Modal, Form, Buttons, BackgroundFade } from "./style";
import { useState, useEffect } from "react";
import EditPost from "../../actions/EditPost";

export default function EditModal({ setEditPopupIsOpen, id }) {
  const [title, setTitle] = useState(false);
  const [content, setContent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BackgroundFade>
      <Modal>
        <h1>Edit item</h1>
        <Form>
          <div>
            <h2>Title</h2>
            <input
              type="text"
              placeholder="Hello world"
              className="TitleInput"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <h2 className="Content">Content</h2>
            <input
              type="text"
              placeholder="Content here"
              className="ContentInput"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </Form>
        <Buttons>
          <button
            onClick={() => {
              setEditPopupIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="SaveButton"
            onClick={() => {
              EditPost(id, title, content);
            }}
          >
            Save
          </button>
        </Buttons>
      </Modal>
    </BackgroundFade>
  );
}
