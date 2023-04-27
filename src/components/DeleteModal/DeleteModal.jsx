import { Modal, Buttons, BackgroundFade } from "./style";

export default function DeleteModal() {
  return (
    <BackgroundFade>
      <Modal>
        <h1>Are you sure you want to delete this item?</h1>
        <Buttons>
          <button>Cancel</button>
          <button className="DeleteButton">Delete</button>
        </Buttons>
      </Modal>
    </BackgroundFade>
  );
}
