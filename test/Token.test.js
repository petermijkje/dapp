const Token = artifacts.require('./Token');

require('chai')
    .use(require('chai-as-promised'))
    .should()

const tokens = (n) => {
    return web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
    )
}

contract('Token', ([deployer, sender, receiver]) => {
    let token 
    const name = "Token"
    const symbol = "LCA"
    const decimals = '18'
    const totalSupply = tokens(1000000).toString()
    const standard = "Token v1.0.0"


    beforeEach(async () => {
        token = await Token.new()
    })

    describe('deployment', () => {
        it('tracks the name', async () => {
            // read token and check it
            const result = await token.name();
            result.should.equal(name)
        })

        it('tracks the symbol', async () => {
            const result = await token.symbol()
            result.should.equal(symbol)
        })

        it('returns the correct decimal number', async () => {
            const result = await token.decimals()
            result.toString().should.equal(decimals)
        })

        it('it should return the correct total supply', async () => {
            const result = await token.totalSupply()
            result.toString().should.equal(totalSupply)
        })
        
        it('returns the correct token version', async () => {
            const result = await token.standard()
            result.should.equal(standard)
        })
        it('assigns the total supply to the deployer', async () => {
            const result = await token.balanceOf(deployer)
            result.toString().should.equal(totalSupply)
        })
    })

    describe('sending tokens', () => {
        it('transfers token balance', async () => {
            // before transfer
            // let balanceOfDeployer
            // let balanceOfReceiver

            let balanceOfDeployer = await token.balanceOf(deployer);
            console.log('deployer balance: ', balanceOfDeployer.toString())
            let balanceOfReceiver = await token.balanceOf(receiver);
            console.log('receiver balance: ', balanceOfReceiver.toString())

            // transfer 
            await token.transfer(receiver, tokens(100), {from: deployer})

            //after transfer
            let balanceOfDeployerFinal = await token.balanceOf(deployer.toString());
            console.log('deployer balance: ', balanceOfDeployerFinal)
            let balanceOfReceiverFinal = await token.balanceOf(receiver);
            console.log('receiver balance: ', balanceOfReceiverFinal.toString())
        })
    })
})
