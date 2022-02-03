// module
const https = require('https');
const axios = require('axios');

const ApiKeyToken = '7DYYBFFH4R4B31ZQMYTB2B2TWIKDWAJB48';
const address = '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc';

/*
// USING AXIOS (WILL NOT WORK IN MAIN JS AS IT'S ASYNC)
async function get_abi(_address, _ApiKeyToken) {
	var response;
	try {
		response = await axios.get('https://api.etherscan.io/api?module=contract&action=getabi&address='+_address+'&apikey='+_ApiKeyToken);
		console.log("response", JSON.parse(response.data.result));
	} catch (error) {
		console.log("error", error);
	}
};
async function run_get_abi(_address, _ApiKeyToken) {
	await get_abi(_address, _ApiKeyToken);
}
run_get_abi(address, ApiKeyToken);
*/

// USING HTTPS (WILL NOT WORK IN MAIN JS AS IT ALOS APPEARS ASYNC)
const req = https.request({hostname:'api.etherscan.io',path:'/api?module=contract&action=getabi&address='+address+'&apikey='+ApiKeyToken,method:'GET'}, res => {
	console.log(`statusCode: ${res.statusCode}`);
	let finData = "";
	res.on('data', d => {
	    finData += d.toString();
	})
	res.on('end', () => {
		console.log(JSON.parse(JSON.parse(finData).result));
	})
})

req.on('error', error => {
  console.error(error)
})

req.end()
