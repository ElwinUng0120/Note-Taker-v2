import {useState, useEffect} from 'react';
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
  const [note, setNote] = useState({title: '', text: ''});

  useEffect(() => {
    setNotes([{title: 'Homeworks', text: `YOU'VE GOT HOMEWORKS TO DO`}, {title: 'Houseworks', text: `YOU'VE GOT HOUSEWORKS TO DO`}]);
    setNote({title: 'testing title', text: 'testing text'});
  }, []);

  return (
  <>
    <Banner />
    <div className="row" style={{width: '100vw', height: '94vh'}}>
      <div className="col-3">
        <NoteList notes={notes} />
      </div> 
      <div className="col-9">
        <Note note={note} />
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
