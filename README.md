# geth-web3-tools
The scripts can be run in parallel to running geth node. To learn how to run a node please visit: https://geth.ethereum.org/docs/getting-started. Running an ethereum node allows direct access to the bolckchain. 
Note: running a node even in snap (default) mode requires sufficient computational resources.

Once an ethereum node is synced in preferred mode (snap mode is sufficient), install nodejs following instructions here: https://nodejs.org/en/download/

### get_block.js
The script connects to locally running node using "geth.ipc" located in your .ethereum folder which is generated at the directory where geth is running. You need to locate the file and replace "path_to_the_file" with the relevant directory path.
