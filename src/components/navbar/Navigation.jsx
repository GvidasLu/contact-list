import {Navbar, Container} from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        Kontaktai
                    </Navbar.Brand>
                    <Navbar.Collapse className="justify-content-end text-primary">
                        Name and Lastname
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;