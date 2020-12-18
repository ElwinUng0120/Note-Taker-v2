import {ChangeEvent, useState} from 'react';
import {Navbar, Form, FormControl, InputGroup, Button} from 'react-bootstrap';

interface props {
    handleSearchNote(title: string): void
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

export default Banner;