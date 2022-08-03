import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({ navigate, navigate1, navigate2 }) => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">{navigate}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#home">{navigate1}</Nav.Link>
            <Nav.Link href="#link">{navigate2}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;