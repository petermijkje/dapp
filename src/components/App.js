import React, { Component } from "react";
import "./App.css";
// import Token from "../abis/Token.json";
import Nav from "./Nav/nav.js";
import {connect} from 'react-redux'
import {loadWeb3, loadAccount} from '../store/interactions'

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData(this.props.dispatch
    );
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch);
    // const network = await web3.eth.net.getNetworkType();
    // const networkID = await web3.eth.net.getId();
    const accounts = await loadAccount(web3, dispatch);
    const tokens = await loadToken(web3, networkId, dispatch)

    window.ethereum.enable().catch((error) => {
      console.log(error);
    });

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