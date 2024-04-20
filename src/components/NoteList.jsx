import { useContext } from 'react';
import { NotesContext } from '../NotesProvider';
import NoteItem from './NoteItem';
import List from '@mui/material/List';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../transitions.css'; 

const NoteList = () => {
    const { state } = useContext(NotesContext);
    const { notes, filter } = state;
  
    const filteredNotes = notes.filter(note => {
      if (filter === 'completed') return note.completed;
      if (filter === 'active') return !note.completed;
      return true; 
    });
  
    return (
      <List>
        <TransitionGroup>
          {filteredNotes.map(note => (
            <CSSTransition key={note.id} timeout={500} classNames="note">
              <NoteItem note={note} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </List>
    );
  };
  
  export default NoteList;
