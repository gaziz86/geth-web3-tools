# geth-web3-tools
get_block.js can only be run in parallel to running geth node. To learn how to run a node please visit: https://geth.ethereum.org/docs/getting-started. Running an ethereum node allows direct access to the bolckchain. 
Note: running a node even in snap (default) mode requires sufficient computational resources. Please consult ethereum.org for more details.

Once an ethereum node is synced in preferred mode (snap mode is sufficient), install nodejs following instructions here: https://nodejs.org/en/download/

### get_block.js: computes EIP-1559 next block's base fee
The script connects to locally running node using "geth.ipc" located in your .ethereum folder which is generated at the directory where geth is running. You need to locate the file and replace "path_to_the_file" with the relevant directory path.

To run code: `node get_block.js`

The code computes expected base fee (as proposed for EIP-1559) for the upcoming block and prints out:
- parent block (most recently confirmed block)
- parent block's base fee
- parent block's gas used
- parent block's gas limit
- computed expected base fee for the upcoming block

### get_contractABI.js (using Etherscan.org API): used to get access to public variables of a smart contract
To access smart contract's on EVM, a contract ABI (Application Binary Interface) must be supplied to web3 nodejs library's contract method. The code demonstrates how an ABI can be obtained from Etherescan.org for a supplied smart contract address. This requires Etherscan API token, which can be obtained (free API is sufficient plan) following instructions here: https://etherscan.io/apis.

Why would you want to get access to smart contracts? Such an access would provide means to get public variables of a smart contract. For instance, if you would like to know current price of Ethereum, you would get reserves data from ETH-USDC smart contract and compute current pricing of the assets.
