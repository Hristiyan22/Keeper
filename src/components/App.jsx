import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(inputText) {
    setNotes((prevNote) => {
      return [...prevNote, inputText];
    });
  }

  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onChecked={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
