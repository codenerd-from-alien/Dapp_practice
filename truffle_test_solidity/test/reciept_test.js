const smartcontract = artifacts.require('Reciept');

contract('smartcontract', () => {
    it('it is supposed to be deployed', async () => {
        const Smart_one = await smartcontract.deployed();
        console.log(Smart_one);
        assert(Smart_one.address !== '');
    })
});