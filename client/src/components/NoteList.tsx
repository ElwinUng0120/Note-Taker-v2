import {Card, ListGroup} from 'react-bootstrap';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {createNote} from '../redux/actions';
import NoteListItem from './NoteListItem';

interface props {
    notes: {title: string, text: string, isDisplay: boolean, isMatched: boolean}[],
    handleCreateNote(title: string, text: string): void,
}

interface actions {
    type: string,
    payload: {title: string, text: string}
}

function NoteList({notes, handleCreateNote}: props) {

    return (
    <Card style={{width: '100%', height: '100%', backgroundColor: 'darkgrey'}}>
        <Card.Body>
            <ListGroup>
                {notes.map(note => {
                    if(note.isMatched) {
                        return <NoteListItem title={note.title} key={note.title}/>
                    }
                    return null;
                })}
                <ListGroup.Item style={{padding: '.2rem'}} onClick={() => handleCreateNote('New Note #' + notes.length, 'Empty note...')}>
                    <span className="align-middle">Create Notes</span>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
    );
}

const mapStateToProps = (state: props) => ({
    notes: state.notes
});

const mapDispatchToProps = (dispatch: Dispatch<actions>) => ({
    handleCreateNote: (title: string, text: string) => dispatch(createNote(title, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);