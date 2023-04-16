import notesStore from "../stores/notesStore";
import "./Note.css";

export default function Note( { note } ) {
    const store = notesStore(store => {
        return {
            deleteNote: store.deleteNote,
            toggleUpdate: store.toggleUpdate
        }
    })

    return(
    <div key={note._id} className="note-section">
        <div className="note-row">
            <h4>{note.title}: </h4>
            <h3> {note.body}</h3>
        </div>
        <div className="note-buttons">
            <button onClick={() => store.deleteNote(note._id)} className="delete-note-btn"> Delete Note </button>  {/* the button is in function es6 to not run instanly*/}
            <button onClick={() => store.toggleUpdate(note)} className="update-note-btn" > Update Note</button>
        </div>
    </div>
    )
}
