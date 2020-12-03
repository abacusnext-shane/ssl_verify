let ssllabs = require('node-ssllabs');
let dnstoscan = process.env.DNSTOSCAN; // add your variable i.e. google.com

ssllabs.scan(dnstoscan, function (err, host) {
	console.dir(`full results: ${host}`);
	let res = host.endpoints[0].details.certChains[0].issues;
	let grade = host.endpoints[0].grade;
	console.dir(`Certificate Chain issues for ${dnstoscan} = ${res}`);
	console.dir(`grade = ${grade}`);
	return process.exit(res + (grade === 'A') ? 0 : 1);
});
// expected results = 0
