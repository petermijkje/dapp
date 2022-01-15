import { tokens, EVM_REVERT } from "./helpers";
const Exchange = artifacts.require("./Exchange");

require("chai").use(require("chai-as-promised")).should();

contract("Exchange", ([deployer, sender, receiver]) => {
  let token;
  const name = "Exchange";
  const symbol = "LCA";
  const decimals = "18";
  const totalSupply = tokens(1000000);
  const standard = "Token v1.0.0";

  beforeEach(async () => {
    token = await Exchange.new();
  });

  describe("deployment", () => {
    
    it("tracks the name", async () => {
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

    it("returns the correct token version", async () => {
      const result = await token.standard();
      result.should.equal(standard);
    });
  });
});
