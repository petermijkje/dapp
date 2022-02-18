const Token = artifacts.require("Token");
const Exchange = artifacts.require("Exchange");

module.exports = async function(callback) {
try {

    const acounts = await web3.eth.getAccounts()

    const token = await Token.deployed()
    console.log("token fetched", token.address)

    const Exchange = await Exchange.deployed()
    console.log("Exchange fetched", exchange.address)

} catch(err) {
    console.log(err)
}
callback()
}