import notesStore from "../stores/notesStore";
import "./UpdateNote.css";

export default function UpdateNote() {
    const store = notesStore();

    if(!store.updateForm._id) return <></>;

    return(
        <div className="update-note">
          <h2>Update Note: </h2>
          <form onSubmit={store.updateNote} className="update-note-form">
            <input 
              onChange={store.handleUpdateFieldChange}
              value={store.updateForm.title} 
              name="title" />
            <textarea 
                onChange={store.handleUpdateFieldChange} 
                value={store.updateForm.body} 
                name="body" />
            <button type="submit"> Update Note </button>
          </form>
        </div>
    )
}