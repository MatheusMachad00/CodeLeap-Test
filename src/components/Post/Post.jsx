import TRASH_CAN from "../../../src/assets/Vector.svg";
import EDIT_BUTTON from "../../../src/assets/bx_bx-edit.svg";
import { Main, PostTop, PostBottom } from "./style";
import EditModal from "../EditModal/EditModal"
import DeleteModal from "../DeleteModal/DeleteModal"
import { useState } from "react";


export default function Post({ id, username, date, title, content }) {
  const [editPopupIsOpen, setEditPopupIsOpen] = useState(false);
  const [deletePopupIsOpen, setDeletePopupIsOpen] = useState(false);

  return (
    <>
      {!editPopupIsOpen ? <></> : <EditModal setEditPopupIsOpen={setEditPopupIsOpen} id={id}/>}
      {!deletePopupIsOpen ? <></> : <DeleteModal setDeletePopupIsOpen={setDeletePopupIsOpen} id={id}/>}
      <Main>
        <PostTop>
          <header>{title}</header>
          <div>
            <button onClick={() => {setDeletePopupIsOpen(true)}}><img src={TRASH_CAN} alt="trash can" className="trashButton" /></button>
            <button onClick={() => {setEditPopupIsOpen(true)}}><img src={EDIT_BUTTON} alt="edit button" /></button>
          </div>
        </PostTop>
        <PostBottom>
          <div>
            <h1>@{username}</h1>
            <h2>{date}</h2>
          </div>
          <p>{content}</p>
        </PostBottom>
      </Main>
    </>
  );
}
