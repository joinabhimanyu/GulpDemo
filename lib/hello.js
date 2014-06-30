
function Hello() {

}

Hello.prototype.sayHello = function (name) {
	if (name == undefined) {
		return "Hello world";
	}
	else {
		return "Hello " + name;
	}
}

module.exports = Hello;