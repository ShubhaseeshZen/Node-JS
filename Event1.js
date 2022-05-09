const event1 = require('events');

const eventemitter = new event1.EventEmitter();

const eventhandler1 = function () {
	console.log('This is first event');
}
const eventhandler2 = function () {
	console.log('This is second Event');
}
const eventhandler3 = function () {
	console.log('This is third event');
}

eventemitter.setMaxListeners(6);
eventemitter.on('first', eventhandler1);
eventemitter.on('second', eventhandler2);
eventemitter.on('third', eventhandler3);

eventemitter.on('elistner', eventhandler1);
eventemitter.on('elistner', eventhandler3);

eventemitter.emit('first');
eventemitter.emit('third');
eventemitter.emit('second');

console.log(eventemitter.listeners('elistner'));

console.log(event1.listenerCount(eventemitter,'elistner'));