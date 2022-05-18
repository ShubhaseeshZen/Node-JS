const events = require('events');
const eventEmitter = new events.EventEmitter();

const myEventHandler1 = function () {
    console.log('Welcome to India');
}
const myEventHandler2 = function () {
    console.log('Welcome to Karnataka');
}
eventEmitter.on('India', myEventHandler1);
eventEmitter.on('Karnataka', myEventHandler2);

eventEmitter.emit('Karnataka');
eventEmitter.emit('India');