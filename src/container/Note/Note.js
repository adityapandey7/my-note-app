import React from "react";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

function Note(props) {
  return (
    <NoteWrapper key={props.id}>
      <div className="main">
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
      </div>

      <div className="footer">
        <small>{props.date}</small>
        <div className="icon">
          <MdDeleteForever
            className="delete"
            onClick={() => props.deleteNote(props.id)}
          />
        </div>
      </div>
    </NoteWrapper>
  );
}

export default Note;

const NoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: green;
  color: white;
  padding: 15px;
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      .delete {
        cursor: pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
    }
  }
`;
