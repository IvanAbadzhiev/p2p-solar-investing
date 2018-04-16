var SolarProjects = artifacts.require("./SolarProjects.sol");

contract('SolarProjects', function(accounts){
	it("Should has one project", function(){
		return SolarProjects.deployed().then(function(instance) {
	      return instance.getBalance.call(accounts[0]);
	    }).then(function(balance) {
	    	console.log(balance);
	      assert.equal(balance.valueOf(), 1, "10000 wasn't in the first account");
	    });
	});
});