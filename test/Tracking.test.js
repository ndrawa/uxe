const { assert } = require("chai")

const Tracking = artifacts.require('./Tracking.sol')

contract('Tracking', (accounts) => {
    let tracking

    before(async () => {
        tracking = await Tracking.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await tracking.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })
})