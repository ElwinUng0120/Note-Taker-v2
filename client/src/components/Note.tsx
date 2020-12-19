import {ChangeEvent, useState, useEffect} from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {saveNote} from '../redux/actions';
import {Card, Form,  Button} from 'react-bootstrap';

interface props {
    notes: {title: string, text: string, isDisplay: boolean}[]
    handleSaveNote(title: string, text: string): void
}

interface actions {
    type: string,
    payload: {title: string, text: string}
}

function Note({notes, handleSaveNote}: props){

    const [input, setInput] = useState('');
    const [title, setTitle] = useState('');
    
    useEffect(() =>{
        notes.forEach(note => {
            if(note.isDisplay){
                setTitle(note.title);
                setInput(note.text);
                return note;
            }
            return note;
        });
    }, [notes]);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const input: string = event.target.value;
        setInput(input);
    }

    return (
    <Card style={{ width: '100%', height: '95%', marginTop: '1%'}}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Form.Group>
                <Form.Control as="textarea" rows={30} style={{resize: 'none'}} onChange={handleInputChange} value={input} />
            </Form.Group>
            <Button variant="primary" style={{float: 'right'}} onClick={() => handleSaveNote(title, input)}>Save</Button> 
        </Card.Body>
    </Card>  
    );
}

const mapStateToProps = (state: props) => ({
    notes: state.notes
});

const mapDispatchToProps = (dispatch: Dispatch<actions>) => ({
    handleSaveNote: (title: string, text: string) => dispatch(saveNote(title, text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);