import {ListGroup, Button} from 'react-bootstrap';

interface props {
    title: string
    // onItemClicked(title: string): void,
    // onRemoveBtnPressed(title: string): void
};

function NoteListItem({title}: props){

    return (
        <ListGroup.Item style={{padding: '.2rem'}}>
            <span className="align-middle">{title}</span>
            <Button style={{float: 'right', fontSize: 'small'}}><i className="fas fa-trash"></i></Button>
        </ListGroup.Item>
    );
}

export default NoteListItem;