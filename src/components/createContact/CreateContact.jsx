import { Card, Form, Button } from "react-bootstrap";
import React, {useState} from "react";

const AddContact = (props) => {
    const [items, setItems] = useState({
        name: '',
        lastName: '',
        email: '',
        phoneNum: ''
    })

    const handleChange = (e) => {
        setItems({
            ...items,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSave(items)

        console.log(items)
    }

    return (
        <>
            <Card>
                <Card.Header>
                    Pridekit contact
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={items.name}
                                onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lastname:</Form.Label>
                            <Form.Control
                                type="text"
                                value={items.lastName}
                                name="lastName"
                                onChange={handleChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={items.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone Number:</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNum"
                                value={items.phoneNum}
                                onChange={handleChange}
                            />
                        </Form.Group>
                            <Button type="submit" className="m-2">Save</Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddContact;