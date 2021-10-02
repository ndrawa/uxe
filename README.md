# Tracking uxe

dev@Indras-MacBook-Pro Github % git clone https://github.com/dappuniversity/starter_kit uxe   
Cloning into 'uxe'...
remote: Enumerating objects: 87, done.
remote: Total 87 (delta 0), reused 0 (delta 0), pack-reused 87
Receiving objects: 100% (87/87), 417.01 KiB | 1004.00 KiB/s, done.
Resolving deltas: 100% (30/30), done.
dev@Indras-MacBook-Pro Github % cd uxe 
dev@Indras-MacBook-Pro uxe % code .

Create tracking.sol

dev@Indras-MacBook-Pro uxe % npm install

[
pragma solidity >=0.7.0 <0.9.0;
^-----------------------------^

add "public"?
    constructor()
]

dev@Indras-MacBook-Pro uxe % truffle migrate
dev@Indras-MacBook-Pro uxe % truffle console
truffle(development)> web3
truffle(development)> account = await web3.eth.getAccounts()
undefined
truffle(development)> account
[
  '0x2DA1938C209098Fc87A8bD1E5f6a4Ba2b3E70f83',
  '0x5122872F957dE6980F75Ffe063DeCF56916A90f5',
  '0xb0833E4096d7f48c0B6448969F3BB00B600F2D79',
  '0x69691851f5F3285a63Cf96cA1e0C8110702e7A32',
  '0x8de35A7E2Cd4063AdcD325777c3bFdAA940158DF',
  '0x0746F1718C779F07dd789eb09a915790bbcf819d',
  '0x30be2827Ac74675D941f43fE3Dc8A9a26d8E0b5d',
  '0x996aD68433d82Ea4b3100859dBBDFEE16E6DDF4D',
  '0xe243c83f2523922E439C016A7c84DE57Bdef6Cf1',
  '0xFEb24917896206F0c5F5d4A0799236097cDf1e9D'
]
truffle(development)> 

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
