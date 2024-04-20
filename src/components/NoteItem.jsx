import { useContext } from 'react';
import { NotesContext } from '../NotesProvider';
import { ListItem, IconButton, ListItemText, Checkbox } from '@mui/material';

const NoteItem = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => dispatch({ type: 'DELETE_NOTE', payload: note.id })}>
          <div>Х</div>
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={note.completed}
        tabIndex={-1}
        disableRipple
        onChange={() => dispatch({ type: 'TOGGLE_NOTE', payload: note.id })}
      />
      <ListItemText primary={note.text} style={{ textDecoration: note.completed ? 'line-through' : 'none' }} />
    </ListItem>
  );
};

export default NoteItem;
