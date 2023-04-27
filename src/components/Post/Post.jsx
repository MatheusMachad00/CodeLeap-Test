import TRASH_CAN from "../../../src/assets/Vector.svg";
import EDIT_BUTTON from "../../../src/assets/bx_bx-edit.svg";
import { Main, PostTop, PostBottom } from "./style";

export default function Post() {
  return (
    <>
    <Main>
      <PostTop>
        <header>My First Post at CodeLeap Network!</header>
        <div>
          <img src={TRASH_CAN} alt="trash can" className="trashButton" />
          <img src={EDIT_BUTTON} alt="edit button" />
        </div>
      </PostTop>
      <PostBottom>
        <div>
          <h1>@Victor</h1>
          <h2>25 minutos ago</h2>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br></br> <br></br> Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </PostBottom>
    </Main>

    <Main>
      <PostTop>
        <header>My First Post at CodeLeap Network!</header>
        <div>
          <img src={TRASH_CAN} alt="trash can" className="trashButton" />
          <img src={EDIT_BUTTON} alt="edit button" />
        </div>
      </PostTop>
      <PostBottom>
        <div>
          <h1>@Victor</h1>
          <h2>25 minutos ago</h2>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br></br> <br></br> Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </PostBottom>
    </Main>

    <Main>
      <PostTop>
        <header>My First Post at CodeLeap Network!</header>
        <div>
          <img src={TRASH_CAN} alt="trash can" className="trashButton" />
          <img src={EDIT_BUTTON} alt="edit button" />
        </div>
      </PostTop>
      <PostBottom>
        <div>
          <h1>@Victor</h1>
          <h2>25 minutos ago</h2>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. <br></br> <br></br> Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </PostBottom>
    </Main>
    
    </>
  );
}
