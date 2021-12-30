// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Token {

    string public name = "Token";
    string public symbol = "LCA";
    string public standard = "Token v1.0.0";
    uint256 public decimals = 18;
    uint256 public totalSupply;

    constructor() public {
        totalSupply = 1000000 * (10 ** decimals);
    }
}