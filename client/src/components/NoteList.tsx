import {Card, ListGroup} from 'react-bootstrap';
import NoteListItem from './NoteListItem';

function NoteList() {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <ListGroup>
                <NoteListItem />
            </ListGroup>
        </Card.Body>
    </Card>
    );
}

export default NoteList;