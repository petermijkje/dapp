import { tokens, ether, EVM_REVERT, ETHER_ADDRESS } from "./helpers";
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
    //deploy token
    token = await Token.new();
    //transfer some tokens to user1
    token.transfer(user1, tokens(100), {from: deployer})
    //deploy exchange
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

  describe("fallback", () => {
    it("Reverts when ether is sent", async () => {
      await exchange.sendTransaction({value: 1, from: user1}).should.be.rejectedWith(EVM_REVERT)
    })
  })

  describe("Depositing Ether", async () => {
    let result;
    let amount 

    beforeEach( async () => {
      amount = ether(1)
      result = await exchange.depositEther({from: user1, value: amount})
    })
    it("Tracks the ether deposit", async () => {
      const balance = await exchange.tokens(ETHER_ADDRESS, user1)
      balance.toString().should.equal(amount.toString())
    })
    it('emits a Deposit event', () => {
        const log = result.logs[0]
        log.event.should.eq('Deposit')
        const event = log.args
        event.token.should.equal(ETHER_ADDRESS, "token address is correct")
        event.user.should.equal(user1, "user address is correct")
        event.amount.toString().should.equal(amount.toString(), "amount is correct")
        event.balance.toString().should.equal(amount.toString(), "balance is correct")
      })
  })

  describe("withdrawing Ether", async () => {
    let result;
    let amount;

    beforeEach( async () => {
      amount = ether(1)
      result = await exchange.depositEther({from: user1, value: amount})
    })

    describe("success", async () => {
      beforeEach( async () => {
        amount = ether(1)
        result = await exchange.withdrawEther(amount, {from: user1})
      })

      it("withdraws ether funds", async () => {
        const balance = await exchange.tokens(ETHER_ADDRESS, user1)
        balance.toString().should.equal('0')
      })

      it('emits a Withdraw event', async () => {
        const log = result.logs[0]
        log.event.should.eq('Withdraw')
        const event = log.args
        event.token.should.equal(ETHER_ADDRESS)
        event.user.should.equal(user1)
        event.amount.toString().should.equal(amount.toString())
        event.balance.toString().should.equal("0")
      })
    })

  })

  describe("Depositing Tokens", () => {
    let result;
    let amount;

    describe("Success", () => {
      beforeEach(async () => {
        amount = tokens(10)
        await token.approve(exchange.address, amount, {from: user1})
        result = await exchange.depositToken(token.address, amount, {from: user1})
      })

      it("tracks the token deposit", async () => {
          //check token balance
          let balance 
          balance = await token.balanceOf(exchange.address)
          balance.toString().should.equal(amount.toString())
          balance = await exchange.tokens(token.address, user1)
          balance.toString().should.equal(amount.toString())

      })

      it('emits a Deposit event', () => {
        const log = result.logs[0]
        log.event.should.eq('Deposit')
        const event = log.args
        event.token.should.equal(token.address, "token address is correct")
        event.user.should.equal(user1, "user address is correct")
        event.amount.toString().should.equal(amount.toString(), "amount is correct")
        event.balance.toString().should.equal(amount.toString(), "balance is correct")
      })
    })

    describe("Failure", () => {

      beforeEach(async () => {
        amount = tokens(10)
      })
      it("rejects ether deposits", async () => {
        await exchange.depositToken(ETHER_ADDRESS, tokens(10), {from: user1}).should.be.rejectedWith(EVM_REVERT)
      })
      
      it("fails when no deposits are approved", async () => {
        // no amount is approved prior to depositing tokens
        await exchange.depositToken(token.address, amount, {from: user1}).should.be.rejectedWith(EVM_REVERT)
      })
    })
  })


});
