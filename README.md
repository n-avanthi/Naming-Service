# Polygon ENS (Ethereum Naming Service)

This project aims to create a decentralized application (dApp) for Domain Naming Service (DNS) on the Polygon network, allowing users to register and manage unique domain names tied to their Ethereum addresses. By leveraging Solidity smart contracts for backend logic and React for the frontend user interface, this service provides a seamless and secure platform for domain name registration and management.

## Prerequisites

- Node.js & npm
- Metamask extension or any Ethereum-enabled browser

## Installation

 1. Clone this repository to your local machine:
   
   ```bash
   git clone https://github.com/n-avanthi/Naming-Service.git
   ```
2. Install the required dependancies:
- For frontend -
    ``` bash
    cd react
    npm install
    ```
- For backend -
    ``` bash
    cd solidity
    npm install
    ```

### Backend (Solidity)
1. Update WALLET_PRIVATE_KEY in the `.env` file
   ```bash
    WALLET_PRIVATE_KEY="Your-Wallet-Private-Key"
    ```
3. Compile the Solidity contracts
   ```bash
    npx hardhat compile
    ```
4. Deploy the contracts to the Polygon Mumbai testnet using Hardhat
    ```bash
    npx hardhat run scripts/deploy.js --network mumbai
    ```
### Frontend (React) 
1. Start the development server
   ```bash
   npm start
   ```

## Deploying to Mainnet
To deploy the contracts to the Polygon mainnet, modify the deployment script to target the mainnet in scripts/deploy.js, and execute the deployment command again.
