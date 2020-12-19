import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {removeNote, displayNote} from '../redux/actions';
import {ListGroup, Button} from 'react-bootstrap';

interface props {
    title: string,
    handleNoteClicked(title: string): void,
    handleRemoveNote(title: string): void
}

interface actions {
    type: string,
    payload: { title: string}
}

function NoteListItem({title, handleNoteClicked, handleRemoveNote}: props){

    return (
    <ListGroup.Item style={{padding: '.2rem'}} onClick={() => handleNoteClicked(title)}>
        <span className="align-middle">{title}</span>
        <Button style={{float: 'right', fontSize: 'small'}} onClick={() => handleRemoveNote(title)}><i className="fas fa-trash"></i></Button>
    </ListGroup.Item>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<actions>) => ({
    handleNoteClicked: (title: string) => dispatch(displayNote(title)),
    handleRemoveNote: (title: string) => dispatch(removeNote(title))
});

export default connect(null, mapDispatchToProps)(NoteListItem);