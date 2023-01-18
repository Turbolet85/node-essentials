const os = require('os');

//info about current user
const user = os.userInfo();
// console.log(user);

// method returns system uptime in seconds
console.log(`System uptime is ${Math.floor(os.uptime() / 60 / 60)} days`);

const currOS = {
	name: os.type(),
	release: os.release(),
	totalMem: Math.floor(os.totalmem() / 1000000000),
	freeMem: os.freemem(),
};

console.log(currOS);
