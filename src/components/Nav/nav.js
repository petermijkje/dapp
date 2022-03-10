import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux'
import {accountSelector} from '../../store/selectors'

class Nav extends Component {
  render(){
  return (
    <div className="nav-bar bg-dark text-white">
      <Navbar>
          <Container>
            <Navbar.Brand href="#home" className="nav-bar bg-dark text-white">Locacia</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="nav-bar bg-dark text-white">
                Signed in as: 
                <a 
                  href={`https://etherscan.io/address/${this.props.account}`} 
                  className="nav-bar bg-dark text-white" 
                >
                {this.props.account}}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div> 
  );
}
}
function mapStateToProps(state) {
  return {
    account: accountSelector(state)
  }
}

export default connect(mapStateToProps)(Nav)