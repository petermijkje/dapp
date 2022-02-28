import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';


function Nav() {
  return (
    <div className="nav-bar bg-dark text-white">
      <Navbar>
          <Container>
            <Navbar.Brand href="#home" className="nav-bar bg-dark text-white">Locacia</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="nav-bar bg-dark text-white">
                Signed in as: <a href="#login" className="nav-bar bg-dark text-white">Peter Sarll</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div> 
  );
}

export default Nav;
