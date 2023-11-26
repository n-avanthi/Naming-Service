require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    mumbai: {
      url: "https://delicate-morning-leaf.matic-testnet.quiknode.pro/f8a070a7298172b259e221f23056e584368baf53/",
      accounts: [process.env.WALLET_PRIVATE_KEY],
    }
  }
};
