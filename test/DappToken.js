var DappToken = artifacts.require("./DappToken.sol");

contract("DappToken", function(accounts){
var tokenInstance;
   it('allocates the correct values to the contract', function(){
     return DappToken.deployed().then(function(instance){
       tokenInstance = instance;
       return tokenInstance.name();
     }).then(function(name){
       assert.equal(name, 'Dapp Token', 'has the correct name');
       return tokenInstance.symbol();
     }).then(function(symbol){
       assert.equal(symbol, "DAPP", 'has the correct symbol');
       return tokenInstance.standard();
     }).then(function(standard){
       assert.equal(standard, 'Dapp Token v1.0', 'has the correct standard');
     });
   })



  it('allocates the total total Supply upon deployment', function(){
    return DappToken.deployed().then(function(instance){
      tokenInstance  = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply){
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance){
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
    });
  });


})
