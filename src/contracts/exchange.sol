// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Exchange {

    string public name = "Exchange";
    string public symbol = "LCA";
    string public standard = "Token v1.0.0";
    uint256 public decimals = 18;
    uint256 public totalSupply;

    address public feeAccount; //the account that receives exchange fees
    //track balances
    mapping(address => uint256) public balanceOf;

    constructor(address _feeAccount) public {
        // totalSupply = 1000000 * (10 ** decimals);
        // balanceOf[msg.sender] = totalSupply;
        feeAccount = _feeAccount;
    }

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