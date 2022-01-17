// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './token.sol';

contract Exchange {

    string public name = "Exchange";
    string public symbol = "LCA";
    string public standard = "Token v1.0.0";
    uint256 public decimals = 18;
    uint256 public totalSupply;
    uint256 public feePercent;

    address public feeAccount; //the account that receives exchange fees
    //track balances
    mapping(address => uint256) public balanceOf;

    constructor(address _feeAccount, uint256 _feePercent) public {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }

    // function depositToken(address _token, uint256 _amount) public {
    //     Token(_token).transferFrom(msg.sender, address(this, _amount));
    // }

}

//to do

// deposit ether
// withdraw ether
// deposit ether
// deposit tokens
// check balance
// make order
//cancel order
// fill order
// charge fees