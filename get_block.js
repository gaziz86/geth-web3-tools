// ethereum modules:
var Web3 = require('web3');
var net = require('net');

// initialize web3:
var web3 = new Web3(new Web3.providers.IpcProvider("/home/gazon/.ethereum/geth.ipc", net));

// set parameters
const gasTarget = 15*10**6;
const gasMax = 30*10**6;

// define function
async function get_block() {

	// get nextBaseFee from new block data (following: https://eips.ethereum.org/EIPS/eip-1559)
	let parent_block = await web3.eth.getBlock(13632170);
	let parent_gasLimit = parent_block["gasLimit"];
	let parent_gasTarget = parent_gasLimit / 2;
	let parent_blockNum = parent_block["number"];
	let parent_baseFee = parseInt(parent_block["baseFeePerGas"], 16);
	let parent_gasUsed = parent_block["gasUsed"];
	let base_fee_per_gas_delta = Math.floor(Math.floor(parent_baseFee*(parent_gasUsed-parent_gasTarget)/parent_gasTarget)/8); // division by 8 => 12.5%
	if (parent_gasUsed > parent_gasTarget) {
		base_fee_per_gas_delta = Math.max(base_fee_per_gas_delta, 1);
	}
	nextBaseFee1 = parent_baseFee + base_fee_per_gas_delta;
	console.log("parent_block:", parent_blockNum);
	console.log("parent_baseFee:", parent_baseFee);
	console.log("parent_gasUsed:", parent_gasUsed);
	console.log("parent_gasLimit:", parent_gasLimit);
	console.log("nextBaseFee1:", nextBaseFee1 / 10**9, "gwei");
}

// execute
get_block();
