const expectThrow = require('./expectThrow');
const SolarProjects = artifacts.require("./SolarProjects.sol");

contract('SolarProjects', function(accounts){

	it('Is create solar project works', async() => {
		let id = 1;
		let name = 'Ivan house';
		let initialCoins = 100;
		let instance = await SolarProjects.deployed();
		instance.createNewProject(id,name,initialCoins);

		let nameAndCoins = await instance.getProjectById(id);
		
		assert.equal(nameAndCoins[0], name);
		assert.equal(nameAndCoins[1].toNumber(), initialCoins);
	});

	/*it('Test onlyOwner modifier', async(promise) => {
		let account_one = accounts[0];
		let account_two = accounts[1];
	
		let instance = await SolarProjects.deployed();
		await expectThrow(instance.destroy( { from : account_two }));
	});*/
});