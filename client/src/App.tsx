import NoteList from './components/NoteList';
import Banner from './components/Banner';
import Note from './components/Note';
import './App.css';


function App() {

  return (
  <>
    <Banner />
    <div className="row" style={{width: '100vw', height: '94vh'}}>
      <div className="col-3">
        <NoteList />
      </div> 
      <div className="col-9">
        <Note />
      </div>
    </div>
  </>
  );
}

export default App;



