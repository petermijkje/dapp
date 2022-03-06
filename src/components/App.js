import React, { Component } from "react";
import "./App.css";
// import Token from "../abis/Token.json";
import Nav from "./Nav/nav.js";
import {loadWeb3} from '../store/interactions'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props.dispatch
    );
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch);

    window.ethereum.enable().catch((error) => {
      console.log(error);
    });

    // const network = await web3.eth.net.getNetworkType();
    // const networkID = await web3.eth.net.getId();
    // console.log("network ID", networkID);
    // console.log("network", network);

    // const accounts = await web3.eth.getAccounts();
    // console.log("accounts", accounts);
    // console.log("Token", Token);

    // const abi = Token.abi;
    // console.log("abi", abi);

    // const networks = Token.networks;
    // console.log("network", networks);
    // console.log("Network Data", Token.networks[networkID]);
    // console.log("Address", Token.networks[networkID].address);

    // const token = new web3.eth.Contract(Token.abi, Token.networks[networkID].address)
    // console.log("token", token)

    // const totalSupply = await token.methods.totalSupply().call()
    // console.log("total supply", totalSupply)

  }

  render() {
    return (
      <div>
        <Nav />

        {/*
        This is originally what the nav bar is but want to find a better one. 
        Keep this until satisfied with the new one

         <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/#">Link 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">Link 3</a>
              </li>
            </ul>
          </div>
        </nav> */}

        <div className="content">
          <div className="vertical-split">
            <div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="card-link">
                  Card link
                </a>
              </div>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="card-link">
                  Card link
                </a>
              </div>
            </div>
          </div>
          <div className="vertical">
            <div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="card-link">
                  Card link
                </a>
              </div>
            </div>
          </div>
          <div className="vertical-split">
            <div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="card-link">
                  Card link
                </a>
              </div>
            </div>
            <div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="card-link">
                  Card link
                </a>
              </div>
            </div>
          </div>
          <div className="vertical">
            <div className="card bg-dark text-white">
              <div className="card-header">Card Title</div>
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/#" className="card-link">
                  Card link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default connect(mapStateToProps)(App)