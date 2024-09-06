import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Form2() {
    return (
        <div className='mt-5'>
            <Form data-bs-theme="dark">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        All information remains private, no data will be shared or sold. 
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Keep me signed in" />
                </Form.Group>
                <Button variant="secondary" type="submit" className='Button mb-3'>
                    Submit
                </Button>
            </Form>
            <p>New user?</p>
        </div>
    )
}

export default Form2;