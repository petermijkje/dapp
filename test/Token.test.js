import { tokens } from './helpers'
const Token = artifacts.require("./Token");

require("chai").use(require("chai-as-promised")).should();


contract("Token", ([deployer, sender, receiver]) => {
  let token;
  const name = "Token";
  const symbol = "LCA";
  const decimals = "18";
  const totalSupply = tokens(1000000);
  const standard = "Token v1.0.0";

  beforeEach(async () => {
    token = await Token.new();
  });

  describe("deployment", () => {
    it("tracks the name", async () => {
      // read token and check it
      const result = await token.name();
      result.should.equal(name);
    });

    it("tracks the symbol", async () => {
      const result = await token.symbol();
      result.should.equal(symbol);
    });

    it("returns the correct decimal number", async () => {
      const result = await token.decimals();
      result.toString().should.equal(decimals);
    });

    it("it should return the correct total supply", async () => {
      const result = await token.totalSupply();
      result.toString().should.equal(totalSupply.toString());
    });

    it("returns the correct token version", async () => {
      const result = await token.standard();
      result.should.equal(standard);
    });
    it("assigns the total supply to the deployer", async () => {
      const result = await token.balanceOf(deployer);
      result.toString().should.equal(totalSupply.toString());
    });
  });

  describe("sending tokens", () => {
    it("transfers token balance", async () => {
      // before transfer
      let balanceOf;

      balanceOf = await token.balanceOf(deployer);
      console.log("deployer balance: ", balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      console.log("receiver balance: ", balanceOf.toString());

      // transfer
      await token.transfer(receiver, tokens(100), { from: deployer });

      //after transfer
      balanceOf = await token.balanceOf(deployer.toString());
      console.log("deployer balance: ", balanceOf);
      balanceOf = await token.balanceOf(receiver);
      console.log("receiver balance: ", balanceOf.toString());
    });
  });
});
