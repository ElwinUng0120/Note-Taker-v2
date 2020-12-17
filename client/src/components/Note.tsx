import {ChangeEvent, useState, useEffect} from 'react';
import {Card, Form,  Button} from 'react-bootstrap';

interface props {
    note: {title: string, text: string},
    handleSaveNote(title: string, text: string): void
    // onSavePressed(title: string, text: string): void
}

function Note({note, handleSaveNote}: props){

    const [input, setInput] = useState('');
    
    useEffect(() => {
        setInput(note.text);
    }, [note.text]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const input: string = event.target.value;
        setInput(input);
    }

    return (
    <Card style={{ width: '100%', height: '95%', marginTop: '1%'}}>
        <Card.Header>{note.title}</Card.Header>
        <Card.Body>
            <Form.Group>
                <Form.Control as="textarea" rows={30} style={{resize: 'none'}} onChange={handleInputChange} value={input} />
            </Form.Group>
            <Button variant="primary" style={{float: 'right'}} onClick={() => handleSaveNote(note.title, input)}>Save</Button>
        </Card.Body>
    </Card>
    );
}

export default Note;