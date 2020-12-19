import {ChangeEvent, useState} from 'react';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import {searchNote} from '../redux/actions';
import {Navbar, Form, FormControl, InputGroup, Button} from 'react-bootstrap';

interface props {
    handleSearchNote(title: string): void
}

interface actions {
    type: string,
    payload: { title: string}
}

function Banner({handleSearchNote}: props){

    const [input, setInput] = useState('');

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        setInput(event.target.value);
    }

    return (
    <Navbar className="bg-dark justify-content-between">
        <Form inline>
            <InputGroup>
                <FormControl
                    placeholder="Keywords..."
                    aria-label="Search"
                    style={{width: '18.5rem'}}
                    value={input}
                    onChange={handleInputChange}
                />
                <InputGroup.Append>
                    <Button onClick={() => handleSearchNote(input)}><i className="fas fa-search"></i></Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
        <Button variant='secondary'>Login</Button>
    </Navbar>
    );
}

const mapDispatchToProps = (dispatch: Dispatch<actions>) => ({
    handleSearchNote: (title: string) => dispatch(searchNote(title)),
});

export default connect(null, mapDispatchToProps)(Banner);