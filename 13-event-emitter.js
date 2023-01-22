const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('responce', (name, id) => {
	console.log(`data received user: ${name} with id:${id}`);
});

customEmitter.on('responce', () => {
	console.log(`some other logic here`);
});

customEmitter.emit('responce', 'John', 34);
