require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    Sepolia:{
      url:'https://eth-sepolia.g.alchemy.com/v2/26NntI6BrRp2oZ0D-cjuJoJDPNQB3CdD',
      accounts:[process.env.pkey]
    }
  }
};
