import React from "react";
import styled from "styled-components";
import Note from "./Note";

const NoteList = (props) => {
  return (
    <NoteListWrapper>
      {props.note.map((note) => (
        <Note
          id={note.id}
          heading={note.heading}
          text={note.text}
          date={note.date}
          deleteNote={props.deleteNote}
        />
      ))}
    </NoteListWrapper>
  );
};

export default NoteList;

const NoteListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
