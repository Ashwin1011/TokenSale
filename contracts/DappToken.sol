pragma solidity 0.5.8;


contract DappToken{

  uint256 public totalSupply;

  string public name = 'Dapp Token';
  string public symbol = 'DAPP';
  string public standard = 'Dapp Token v1.0' ;

  mapping(address => uint256) public balanceOf;
  constructor(uint _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
    //allocate the initial supply
  }




}
