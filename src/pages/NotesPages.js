import React, { useEffect } from 'react'
import CreateNote from '../components/CreateNote';
import Notes from '../components/Notes';
import UpdateNote from '../components/UpdateNote';
import notesStore from '../stores/notesStore';

function NotesPages() {

  const store = notesStore();

  //UseEffect
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
        <Notes /> 
        <UpdateNote />
        <CreateNote />
    </div>
  )
}

export default NotesPages