require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const keyData = fs.readFileSync('./p-key.txt', {
  encoding: 'utf8',
  flag: 'r'
});

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const projectId = '0202a449603b4b56b54dc26c29d76667';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337  
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [keyData]
    },  
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [keyData]
    }
  },    
  solidity: {
    version: "0.8.4",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
};
