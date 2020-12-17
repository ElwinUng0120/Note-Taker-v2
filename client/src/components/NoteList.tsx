import {MouseEvent} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import NoteListItem from './NoteListItem';

interface props {
    notes: {title: string, text: string}[],
    handleNoteClicked(title: string): void,
    handleCreateNote(): void,
    handleRemoveNote(event: MouseEvent, title: string): void
    
    // onItemClicked(title: string): void,
    // onRemoveBtnPressed(title: string): void,
    // onCreateClicked(title: string, text: string): void
}

function NoteList({notes, handleNoteClicked, handleCreateNote, handleRemoveNote}: props) {

    return (
    <Card style={{width: '100%', height: '100%', backgroundColor: 'darkgrey'}}>
        <Card.Body>
            <ListGroup>
                {notes.map(note => <NoteListItem title={note.title} handleNoteClicked={handleNoteClicked} handleRemoveNote={handleRemoveNote} key={note.title}/>)}
                <ListGroup.Item style={{padding: '.2rem'}} >
                    <span className="align-middle" onClick={handleCreateNote}>Create Notes</span>
                </ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
    );
}

export default NoteList;