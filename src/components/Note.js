import notesStore from "../stores/notesStore"

export default function Note( { note } ) {
    const store = notesStore(store => {
        return {
            deleteNote: store.deleteNote,
            toggleUpdate: store.toggleUpdate
        }
    })

    return(
    <div key={note._id}>
        <h3>{note.title}</h3>
        <h4>{note.body}</h4>
        <button onClick={() => store.deleteNote(note._id)}> Delete Note </button>  {/* the button is in function es6 to not run instanly*/}
        <button onClick={() => store.toggleUpdate(note)}> Update Note</button>
    </div>
    )
}
