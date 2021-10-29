import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
import { Form, Button } from 'react-bootstrap';

export default function ContactForm() {
    
    return (
        <Form style={{  }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Leave a message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit"> Submit</Button>
        </Form>
    )
}