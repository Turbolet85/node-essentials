const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./context/first.txt', 'utf8');
const second = readFileSync('./context/second.txt', 'utf8');

console.log(first, second);

writeFileSync(
	'./context/result-sync.txt',
	`Here is the result: ${first}, ${second}`,
	{ flag: 'a' }
);
