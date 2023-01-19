const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const getText = (path) => {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, 'utf8', (err, data) => {
// 			if (err) {
// 				reject(err);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// };

// getText('./context/first.txt')
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));

const start = async () => {
	try {
		const first = await readFile('./context/first.txt', 'utf8');
		const second = await readFile('./context/second.txt', 'utf8');
		await writeFile(
			'./context/result-mind-grenade.txt',
			`THIS IS AWESOME: ${first}, ${second}`
		);
		console.log(first, second);
	} catch (error) {
		console.log('error');
	}
};

start();
