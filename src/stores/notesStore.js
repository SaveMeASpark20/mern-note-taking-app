import axios from 'axios';
import { create } from 'zustand'

const notesStore = create((set) => ({
  notes: null,

  createForm: {
    title: "",
    body: ""
  },
  
  updateForm: {
    _id : null,
    title: "",
    body: ""
  },

  fetchNotes: async () => {

    //Fetch the notes
    const res = await axios.get("/notes")
    //set the notes to the res data
    set({ notes: res.data.notes });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => { //return because it change the oldstate of createForm
      return{
        createForm: {
          ...state.createForm,
          [name] : value,
        }
      }
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    const {createForm, notes} = notesStore.getState();

    //Create Note
    const res = await axios.post("/notes", createForm)
    

    set({ // while here we dont use return because we only set the data to empty string
      notes: [...notes, res.data.note],
      createForm: {
        title: "", 
        body: "",
      },
    })
  },

  deleteNote: async (_id) => {
    //deletenotes
    const res = await axios.delete(`/notes/${_id}`);
    const {notes} = notesStore.getState();
    //update note
    const newNotes = notes.filter(note => {
      return note._id !== _id;
    })

    set({ notes: newNotes });
    console.log(res);
  },

  handleUpdateFieldChange : (e) => {
    const { name, value } = e.target;

    set((state) => {
      return{
        updateForm: {
          ...state.updateForm,
          [name] : value,
        }
    }
  })
},

  toggleUpdate : ({_id, title, body }) => {
    set({
      updateForm: {
        title,
        body,
        _id
      }
    })
  },

  updateNote : async (e) => {
    e.preventDefault();

    const {updateForm: {title, body, _id}, notes } = notesStore.getState();
    const res = await axios.put(`/notes/${_id}`, {title, body}) ;
    console.log(res);
 
    //Set State
    
    const  newNotes = [...notes];
    const findNoteIndex = notes.findIndex(note => {
      return note._id === _id; 
    })
    newNotes[findNoteIndex] = res.data;


    set({
      notes: newNotes,
      updateForm:{
      _id: null,
      title: "",
      body: ""
      },
    })


  }
}));

export default notesStore;