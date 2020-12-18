import {MouseEvent, useState, useEffect} from 'react';
// For redux
// import {Dispatch} from 'redux';
// import {connect} from 'react-redux';
// import {createNote, removeNote, saveNote} from './redux/actions';
import NoteList from './components/NoteList';
import Banner from './components/Banner';
import Note from './components/Note';
import './App.css';

interface props {
  notes: {title: string, text: string}[],
  onRemoveBtnPressed(title: string): void,
  onCreateClicked(title: string, text: string): void,
  onSavePressed(title: string, text: string): {title: string, text: string}
}

// For redux
// interface actions {
//   type: string,
//   payload: { title: string}
// }

function App() { // {notes, onRemoveBtnPressed, onCreateClicked, onSavePressed}: props

  const [notes, setNotes] = useState([{title: '', text: ''}]);
  const [displayNote, setDisplayNote] = useState({title: '', text: ''});
  const [displayNotes, setDisplayNotes] = useState([{title: '', text: ''}]);

  useEffect(() => {
    setDisplayNotes([{title: 'Homeworks', text: `YOU'VE GOT HOMEWORKS TO DO`}, {title: 'Houseworks', text: `YOU'VE GOT HOUSEWORKS TO DO`}]);
    setNotes([{title: 'Homeworks', text: `YOU'VE GOT HOMEWORKS TO DO`}, {title: 'Houseworks', text: `YOU'VE GOT HOUSEWORKS TO DO`}]);
    setDisplayNote({title: 'testing title', text: 'testing text'});
  }, []);

  function handleNoteClicked(title: string): void{
    displayNotes.find(note => {
      if(note.title === title){
        setDisplayNote(note);
        return true;
      }
      return false;
    });
  }

  function handleCreateNote(): void{
    displayNotes.push({title: 'New Note #' + displayNotes.length, text: 'Empty notes...'});
    setDisplayNotes([...displayNotes]);
    setNotes([...displayNotes]);
  }

  function handleSaveNote(title: string, text: string): void{
    displayNotes.find(note => {
      if(note.title === title){
        note.text = text;
        alert(`${title} saved`);
        return true;
      }
      return false;
    })
  }

  function handleRemoveNote(event: MouseEvent, title: string): void{
    event.stopPropagation();
    displayNotes.filter(note => note.title !== title);
    setDisplayNotes(displayNotes.filter(note => note.title !== title));
    setNotes(displayNotes.filter(note => note.title !== title));
  }

  function handleSearchNote(title: string): void{
    if(title === null) {
      setDisplayNotes([...notes]);
    } else {
      setDisplayNotes([...notes.filter(note => note.title.includes(title))]);
    }
  }

  return (
  <>
    <Banner handleSearchNote={handleSearchNote} />
    <div className="row" style={{width: '100vw', height: '94vh'}}>
      <div className="col-3">
        <NoteList notes={displayNotes} handleNoteClicked={handleNoteClicked} handleCreateNote={handleCreateNote} handleRemoveNote={handleRemoveNote} />
      </div> 
      <div className="col-9">
        <Note note={displayNote} handleSaveNote={handleSaveNote} />
      </div>
    </div>
  </>
  );
}

// For redux
// const mapStateToProps = (state: props) => ({
//   notes: state.notes
// });

// const mapDispatchToProp = (dispatch: Dispatch<actions>) => ({
//   onCreateClicked: (title: string, text: string) => dispatch(createNote(title, text)),
//   onRemoveBtnPressed: (title: string) => dispatch(removeNote(title)),
//   onSavePressed: (title: string, text: string) => dispatch(saveNote(title, text))
// });

export default App;
