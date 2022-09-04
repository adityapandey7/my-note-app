import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./container/Header/Header";
import NoteList from "./container/Note/NoteList";
import GlobalStyle from "./container/GlobalCss.js/Globalcss";
import { nanoid } from "nanoid";
import AddNote from "./container/AddNote";
import { AiOutlineFileAdd } from "react-icons/ai";

const tempData = [
  {
    id: nanoid(),
    heading: "Heading ",
    text: "This is text.",
    date: "22-12-2022",
  },
  {
    id: nanoid(),
    heading: "GUide 1",
    text: "You can search your note using search icon.",
    date: "22-12-2022",
  },
  {
    id: nanoid(),
    heading: "Heading 3",
    text: "lorem ispum lorem ispum 3",
    date: "22-12-2022",
  },
];
function App() {
  const [searchText, setSearchText] = useState("");
  const [note, setNote] = useState(retrieveData());
  const [show, setShow] = useState(false);

  //function to retrive note from localStorage
  function retrieveData() {
    const notes = JSON.parse(localStorage.getItem("My-Note-Aditya"));
    if (notes) {
      return notes;
    } else {
      return tempData;
    }
  }

  // Show add forum

  function handleClick() {
    setShow(!show);
  }

  //function to add note dynamically
  function addNote(text, title) {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      heading: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    setNote([...note, newNote]);
  }

  //useEffect to add notes in localStorage
  useEffect(() => {
    localStorage.setItem("My-Note-Aditya", JSON.stringify(note));
  }, [note]);

  //function for deleteing note

  function deleteNote(id) {
    const newNote = note.filter((note) => note.id !== id);
    setNote(newNote);
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <Header searchHandler={setSearchText} />
          <AddNoteIcon>
            Add Note <AiOutlineFileAdd className="add" onClick={handleClick} />
          </AddNoteIcon>
          {show && <AddNote handleAddNote={addNote} close={handleClick} />}
          <NoteList
            note={note.filter((note) =>
              note.text.toLowerCase().includes(searchText.toLowerCase())
            )}
            deleteNote={deleteNote}
          />
        </div>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  .conatiner {
    max-width: 950px;
    .dark-mode {
      background-color: black;
    }
  }
`;

const AddNoteIcon = styled.span`
  display: flex;
  font-size: 16px;
  justify-content: end;
  align-items: center;
  position: relative;
  right: 10px;
  margin: 15px;
  .add {
    margin-left: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
