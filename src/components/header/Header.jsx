import { Button, Card, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import CreateContact from "../createContact/CreateContact";
import TableContact from "../table/TableContact";
import Contacts from "../contacts/Contacts";

const Header = () => {

    const [addContacts, setAddContacts] = useState(false);
    const [contacts, setContacts] = useState([])

    const saveContactsHandler = (data) => {
        setAddContacts(false)
    }

    useEffect(() => {
        setContacts(contacts)
    }, [])

    return (
        <>
            {(addContacts) && <CreateContact onSave={saveContactsHandler} />}

            <h2 className="text-center m5">Prideti nauja contact</h2>
            <Card>
                <Card.Header>
                    <Button className="btn btn-primary m-2" onClick={() => setAddContacts(true)}>Pridekite contact</Button>
                </Card.Header>
                <Card.Body>
                    <TableContact data={contacts} />
                </Card.Body>
            </Card> 
        </>
    )
}

export default Header;