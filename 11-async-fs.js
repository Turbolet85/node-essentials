const { readFile, writeFile } = require('fs');

readFile('./context/first.txt', 'utf8', (error, result) => {
	if (error) {
		console.log('brbrb');
	}
	const first = result;
	readFile('./context/second.txt', 'utf8', (error, result) => {
		if (error) {
			console.log('brbrb');
		}
		const second = result;
		writeFile(
			'./context/result-async.txt',
			`Here is the result: ${first}, ${second}`,
			(err, result) => {
				if (err) {
					console.log(sdf);
				}
				console.log(result);
			}
		);
	});
});
