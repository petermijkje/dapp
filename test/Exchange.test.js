import { tokens, EVM_REVERT } from "./helpers";
const Exchange = artifacts.require("./Exchange");

require("chai").use(require("chai-as-promised")).should();

contract("Exchange", ([deployer, feeAccount, receiver]) => {
  let exchange;
  const name = "Exchange";
  const symbol = "LCA";
  const decimals = "18";
  const totalSupply = tokens(1000000);
  const standard = "Token v1.0.0";

  beforeEach(async () => {
    exchange = await Exchange.new(feeAccount);
  });

  describe("deployment", () => {
    
    it("tracks the name", async () => {
      const result = await exchange.name();
      result.should.equal(name);
    });

    it("tracks the symbol", async () => {
      const result = await exchange.symbol();
      result.should.equal(symbol);
    });

    it("returns the correct decimal number", async () => {
      const result = await exchange.decimals();
      result.toString().should.equal(decimals);
    });

    it("returns the correct token version", async () => {
      const result = await exchange.standard();
      result.should.equal(standard);
    });
    it('tracks the fee account', async () => {
        const result = await exchange.feeAccount();
        result.should.equal(feeAccount)
    })
  });
});
