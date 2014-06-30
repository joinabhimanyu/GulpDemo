var assert = require('assert');
var Hello = require('./lib/hello');

var myHello = new Hello();

assert.equal(myHello.sayHello(), "Hello world");

assert.equal(myHello.sayHello("abhimanyu"), "Hello abhimanyu");
