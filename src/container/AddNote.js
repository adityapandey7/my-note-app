import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Backdrop = (props) => {
  return <BackDrop onClick={() => props.close()} />;
};

const Modal = (props) => {
  const [textArea, setTextArea] = useState("");
  const [title, setTitle] = useState("");

  const charLimit = 280;

  function handleTextArea(event) {
    if (charLimit - event.target.value.length >= 0) {
      setTextArea(event.target.value);
    }
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleSave() {
    if (textArea.trim().length > 0) {
      props.handleAddNote(textArea, title);
      setTextArea("");
      setTitle("");
    }
  }

  return (
    <NewNote>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitle}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Type you note here"
        value={textArea}
        onChange={handleTextArea}
      />
      <div className="footer">
        <small>{charLimit - textArea.length} Remaining</small>
        <button
          onClick={() => {
            props.close();
            handleSave();
          }}
        >
          SAVE
        </button>
      </div>
    </NewNote>
  );
};

function AddNote(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop close={props.close} />,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <Modal handleAddNote={props.handleAddNote} close={props.close} />,
        document.getElementById("modal")
      )}
    </>
  );
}

export default AddNote;

const NewNote = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  outline: none;
  border: none;
  border-radius: 6px;
  input {
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 6px 6px 0 0;
    border-bottom: 1px solid;
  }
  textArea {
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 0px 0px 6px 6px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    small {
      font-size: 14px;
      color: white;
    }
    button {
      padding: 5px;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const BackDrop = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.723);
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
`;
