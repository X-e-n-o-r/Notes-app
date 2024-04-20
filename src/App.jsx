import { NotesProvider } from './NotesProvider';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import Filters from './components/Filters';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <NotesProvider>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            React Notes App
          </Typography>
          <AddNote />
          <Filters />
          <NoteList />
        </Box>
      </Container>
    </NotesProvider>
  );
};

export default App;
