import {Card, ListGroup} from 'react-bootstrap';
import NoteListItem from './NoteListItem';

interface props {
    notes: {title: string, text: string}[],
    // onItemClicked(title: string): void,
    // onRemoveBtnPressed(title: string): void,
    // onCreateClicked(title: string, text: string): void
}

function NoteList({notes}: props) {

    return (
    <Card style={{width: '100%', height: '100%', backgroundColor: 'darkgrey'}}>
        <Card.Body>
            <ListGroup>
                {notes.map(note => <NoteListItem title={note.title} />)}
                <ListGroup.Item style={{padding: '.2rem'}} >
                    <span className="align-middle">Create Notes</span>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
    );
}

export default NoteList;