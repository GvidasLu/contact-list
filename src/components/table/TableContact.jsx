import React from 'react';
import { Table } from "react-bootstrap";
import Contacts from "../contacts/Contacts";

const TableContact = (props) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((contact, i) => {
                    return (<Contacts
                        key = {i}
                        id = {contact.id}
                        name = {contact.name}
                        lastName = {contact.lastName}
                        email = {contact.email}
                        phoneNum = {contact.phoneNum}
                    />)
                })
            }
            </tbody>
        </Table>
    )
}

export default TableContact;