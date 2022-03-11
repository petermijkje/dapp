import React, { Component } from "react";
import "./App.css";
// import Token from "../abis/Token.json";
import Nav from "./Nav/nav.js";
import Content from "./content/content.js";
import {connect} from 'react-redux'
import {loadWeb3, loadAccount, loadToken, loadExchange } from '../store/interactions'
import Web3 from "web3";
import {accountSelector} from '../store/selectors'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    const accounts = await loadAccount(web3, dispatch)
    const token = await loadToken(web3, networkId, dispatch)
    const exchange = await loadExchange(web3, networkId, dispatch)
  }

  render() {
    return (
      <div>
        <Nav />
        <Content />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(App)