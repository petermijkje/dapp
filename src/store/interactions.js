import {
    web3Loaded,
    web3AccountLoaded, 
} from './actions'
import Web3 from "web3";


export const loadWeb3 = async (dispatch) => {
  if(typeof window.ethereum !== 'undefined'){
    const web3 = new Web3(window.ethereum);
    dispatch(web3Loaded(web3))
    return web3
  } else {
    window.alert('Please install MetaMask')
    window.location.assign("https://metamask.io/")
  }
}

export const loadAccount = async (web3, dispatch) => {
    const webthree = new Web3(window.ethereum);
    const accounts = await webthree.eth.getAccounts()
    const account = await accounts[0] 
    if (typeof account !== 'undefined') {
        dispatch(web3AccountLoaded(account))
        return account
    } else {
        window.alert('Please login with MetaMask')
        return null
    }
}
