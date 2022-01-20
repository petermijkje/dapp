import { tokens, EVM_REVERT } from "./helpers";
const Exchange = artifacts.require("./Exchange");
const Token = artifacts.require("./Token");


require("chai").use(require("chai-as-promised")).should();

contract("Exchange", ([deployer, feeAccount, user1]) => {
  let exchange;
  let token;
  const name = "Exchange";
  const symbol = "LCA";
  const decimals = "18";
  const totalSupply = tokens(1000000);
  const standard = "Token v1.0.0";
  const feePercent = 10;

  beforeEach(async () => {
    token = await Token.new();
    exchange = await Exchange.new(feeAccount, feePercent);
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
        it('tracks the fee amount', async () => {
        const result = await exchange.feePercent();
        result.toString().should.equal(feePercent.toString())
    })
  });

//   describe("depositing tokens", () => {
//       let result;
//       let amount;

//       beforeEach( async () => {
//         amount = tokens(10)
//         await token.approve(transfer.address, amount, {from: user1})
//         result = await exchange.depositToken(token.address, amount, {from: user1})
//       })

//       describe("success", () => {
//           it("tracks the deposit of a token", async () =>{
//               let balance;
//               balance = await token.balanceOf(exchange.address);
//               balance.toString().should.equal(amount.toString());
//           })
//       })

//       describe("Failure", () => {
//           it("tracks the deposit of a token", async () =>{
              
//           })
//       })
//   })
});
