import { useContext } from 'react';
import { NotesContext } from '../NotesProvider';
import Button from '@mui/material/Button';

const Filters = () => {
  const { dispatch } = useContext(NotesContext);

  return (
    <div>
      <Button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'all' })}>All</Button>
      <Button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'active' })}>Active</Button>
      <Button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'completed' })}>Completed</Button>
    </div>
  );
};

export default Filters;
