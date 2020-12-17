import {MouseEvent} from 'react';
import {Navbar, Form, FormControl, InputGroup, Button} from 'react-bootstrap';

function Banner(){

    function btnPressed(event: MouseEvent){
        console.log(event);
    }

    return (
    <Navbar className="bg-dark justify-content-between">
        <Form inline>
            <InputGroup>
                <FormControl
                    placeholder="Keywords..."
                    aria-label="Search"
                    style={{width: '18.5rem'}}
                />
                <InputGroup.Append>
                    <Button><i className="fas fa-search"></i></Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
        <Button variant='secondary' onClick={btnPressed} >Login</Button>
    </Navbar>
    );
}

export default Banner;