// module
const https = require('https');

const ApiKeyToken = 'YOUR_ETHERSCAN_API_TOKEN';
const address = 'YOUR_DESIRED_SMART_CONTRACT_ADDRESS';

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
