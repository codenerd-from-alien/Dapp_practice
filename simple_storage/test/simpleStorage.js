const SimpleStorage = atifacts.require('SimpleStorage');

contract('SimpleSorage', () => {
    it('Should set the value of data variable', async () => {
        const simpleStorage = await SimpleStorage.deployed();
        await simpleStorage.set('this');
        const result = await simpleStorage.get();
        assert(result === 'this');
    });
})