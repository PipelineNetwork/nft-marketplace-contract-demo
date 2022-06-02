# NFT Marketplace Hardhat Project

It comes with a test in test/ folder

```shell
npx hardhat test
```

To make sure the address is properly populated into config.js
Run a local blockchain server either through Ganache or hardhat own nodes

```shell
npx hardhat node
```

You may then deploy the project locally via

```shell
npx hardhat run scripts/deploy.js --network localhost
```

This project has also been set up to work on infura with mumbai testnet.
You can deploy to this test network using this command

```shell
npx hardhat run scripts/deploy.js --network mumbai
```

To get some coin into your wallet, you may make a request at
[https://faucet.polygon.technology/](https://faucet.polygon.technology/)

Add mumbai testnet to your metamask
[https://chainlist.org/](https://chainlist.org/)