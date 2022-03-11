import React, { Component } from "react";
import "./App.css";
// import Token from "../abis/Token.json";
import Nav from "./Nav/nav.js";
import Content from "./content/content.js";
import {connect} from 'react-redux'
import {loadWeb3, loadAccount, loadToken, loadExchange } from '../store/interactions'
import Web3 from "web3";
import {accountSelector} from '../store/selectors'
import {contractsLoadedSelector} from '../store/selectors'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = await loadWeb3(dispatch)
    const networkId = await web3.eth.net.getId()
    const accounts = await loadAccount(web3, dispatch)
    const token = await loadToken(web3, networkId, dispatch)

    if(!token){
      window.alert('token smart contract not detected on the current network. Please select another network with Metamask.')
      return 
    }
    const exchange = await loadExchange(web3, networkId, dispatch)

    if(!exchange){
      window.alert('Exchange not detected on the current network. Please select another network with Metamask.')
      return 
    }
  }

  render() {
    return (
      <div>
        <Nav />
        {this.props.contractsLoaded ? <Content /> : <div className="content"></div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('contractloadedselector',contractsLoadedSelector(state))
  return {
    contractsLoaded: contractsLoadedSelector(state)
  }
}

export default connect(mapStateToProps)(App)