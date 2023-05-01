import { Modal, Buttons, BackgroundFade } from "./style";
import DeletePost from "../../actions/DeletePost";
import { useEffect } from "react";

export default function DeleteModal({ setDeletePopupIsOpen, id }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BackgroundFade>
      <Modal>
        <h1>Are you sure you want to delete this item?</h1>
        <Buttons>
          <button
            onClick={() => {
              setDeletePopupIsOpen(false);
            }}
          >
            Cancel
          </button>
          <button
            className="DeleteButton"
            onClick={() => {
              DeletePost(id);
            }}
          >
            Delete
          </button>
        </Buttons>
      </Modal>
    </BackgroundFade>
  );
}
