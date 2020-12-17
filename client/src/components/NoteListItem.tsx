import {MouseEvent} from 'react';
import {ListGroup, Button} from 'react-bootstrap';

interface props {
    title: string,
    handleNoteClicked(title: string): void,
    handleRemoveNote(event: MouseEvent, title: string): void
    // onItemClicked(title: string): void,
    // onRemoveBtnPressed(title: string): void
};

function NoteListItem({title, handleNoteClicked, handleRemoveNote}: props){

    return (

        <ListGroup.Item style={{padding: '.2rem'}} onClick={() => handleNoteClicked(title)}>
            <span className="align-middle">{title}</span>
            <Button style={{float: 'right', fontSize: 'small'}} onClick={(event) => handleRemoveNote(event, title)}><i className="fas fa-trash"></i></Button>
        </ListGroup.Item>
    );
}

export default NoteListItem;