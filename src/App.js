import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./component/NotesList";
import Header from "./component/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "...",
      date: `05/12/2021`,
    },
    {
      id: nanoid(),
      text: "...",
      date: `05/12/2021`,
    },
  ]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const [bln, tgl, thn] = date.toLocaleDateString().split("/");
    const newNote = {
      id: nanoid(),
      text: text,
      date: `${tgl}/${bln}/${thn}`,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Header />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
