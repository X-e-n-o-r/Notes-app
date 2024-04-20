import { useContext, useState } from 'react';
import { NotesContext } from '../NotesProvider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddNote = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(NotesContext);

  const handleAddNote = () => {
    if (text) {
      dispatch({ type: 'ADD_NOTE', payload: text });
      setText('');
    }
  };

  return (
    <div>
      <TextField
        label="New Note"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        sx={{ mb: 3 }}
        InputLabelProps={{
            style: { color: 'white' } 
          }}
          InputProps={{
            style: { color: 'white' }, 
            notchedOutline: {
              borderColor: 'white',
            },
          }}
      />
      <Button onClick={handleAddNote} variant="contained" color="primary" sx={{ ml: 2.5 }}>
        Add Note
      </Button>
    </div>
  );
};

export default AddNote;
