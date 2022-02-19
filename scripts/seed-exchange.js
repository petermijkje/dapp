const Token = artifacts.require("Token");
const Exchange = artifacts.require("Exchange");

module.exports = async function (callback) {
  try {
    const acounts = await web3.eth.getAccounts();

    const token = await Token.deployed();
    console.log("token fetched", token.address);

    const Exchange = await Exchange.deployed();
    console.log("Exchange fetched", exchange.address);

    const sender = accounts[0];
    const receiver = accounts[1];

    let amount = eb3.utils.toWei("10000", "ether");

    await token.transfer(receiver, amount, { from: sender });
    console.log(`Transferred ${amount} tokens from ${sender} to ${receiver}`);
    
  } catch (err) {
    console.log(err);
  }
  callback();
};
