import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';


function Nav() {
  return (
    <div className="nav-bar">
      <Navbar>
          <Container>
            <Navbar.Brand href="#home">Locacia</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div> 
  );
}

export default Nav;
