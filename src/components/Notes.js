import notesStore from "../stores/notesStore";
import Note from "./Note";
import "./Notes.css";

export default function Notes() {
  const store = notesStore();
  return (
  <div className="notes-section">
    <h1>Notes: </h1>
    {store.notes &&
      store.notes.map((note) => {
        return (
          <Note note = {note} key = {note._id}/>
        ) 
      })
    }
  </div>
  )
}
   
