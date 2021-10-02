# Tracking uxe

[
Create tracking.sol
]

% npm install
[
pragma solidity >=0.7.0 <0.9.0;
^-----------------------------^

add "public"?
    constructor()
]

% truffle migrate
% truffle console
truffle(development)> web3
truffle(development)> account = await web3.eth.getAccounts()
undefined
truffle(development)> account

[
Create deploy_constract.js
]

truffle(development)> truffle migrate
truffle(development)> tracking = await Tracking.deployed()
undefined
truffle(development)> tracking
truffle(development)> tracking.address
'0xF4B6D9373Eb64713a7fD8824b22ecC0F468fD418'
truffle(development)> admin = await tracking.admin()
undefined
truffle(development)> admin
'0x2DA1938C209098Fc87A8bD1E5f6a4Ba2b3E70f83'
truffle(development)> nama = await tracking.users(admin)
undefined
truffle(development)> nama
Result {
  '0': 'Admin',
  '1': BN {
    negative: 0,
    words: [ 0, <1 empty item> ],
    length: 1,
    red: null
  },
  name: 'Admin',
  role: BN {
    negative: 0,
    words: [ 0, <1 empty item> ],
    length: 1,
    red: null
  }
}
truffle(development)> 
