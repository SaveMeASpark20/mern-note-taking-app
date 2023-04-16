import notesStore from "../stores/notesStore";
import "./CreateNote.css";

export default function CreateNote() {
    const store = notesStore();
    
    if(store.updateForm._id) return <></>;

    return(
        <div className="create-note">
          <h2>Create Note: </h2>
          <form onSubmit={store.createNote} className="create-note-form">
            <input
              onChange={store.updateCreateFormField}
              value={store.createForm.title}
              name="title" placeholder="title" required/>

            <textarea
              onChange={store.updateCreateFormField}
              value={store.createForm.body}
              name="body" placeholder="description" required/>

            <button type="submit">Create Note</button>
            
          </form>
        </div>
    )
}