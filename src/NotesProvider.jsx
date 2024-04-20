import { createContext, useReducer, useEffect } from 'react';


const initialState = {
  notes: JSON.parse(localStorage.getItem('notes')) || [],  
  filter: 'all'
};


function notesReducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, { id: Date.now(), text: action.payload, completed: false }] };
    case 'TOGGLE_NOTE':
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload ? { ...note, completed: !note.completed } : note
        )
      };
    case 'DELETE_NOTE':
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) };
    default:
      return state;
  }
}


export const NotesContext = createContext();


export const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state.notes));
  }, [state.notes]);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
