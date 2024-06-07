# Polygon ENS (Ethereum Name Service)

This project is a decentralized application (dApp) that allows users to register and manage unique names associated with Ethereum addresses on the Polygon network. This naming service uses Solidity for the backend smart contracts and React for the frontend interface.

### Features

- **Name Registration:** Users can register unique names tied to their Ethereum addresses on the Polygon network.
- **Frontend Interface:** Built with React to interact with the Solidity smart contracts.

## Installation

### Prerequisites

- Node.js & npm
- Metamask extension or any Ethereum-enabled browser

### Backend (Solidity)
1. Navigate to the `solidity` directory.
2. Install dependencies with `npm install`.
3. Update WALLET_PRIVATE_KEY in the `.env` file.
4. Compile the Solidity contracts using a Solidity compiler like `solc`.
   ```bash
   npx hardhat compile
5. Deploy the contracts to the Polygon Mumbai testnet using Hardhat
    ```bash
    npx hardhat run scripts/deploy.js --network mumbai
### Frontend (React) 
1. Navigate to the `React` directory.
2. Install dependencies with `npm install`.
3. Start the development server.

## Deploying to Mainnet
To deploy the contracts to the Polygon mainnet, modify the deployment script to target the mainnet in scripts/deploy.js, and execute the deployment command again.
