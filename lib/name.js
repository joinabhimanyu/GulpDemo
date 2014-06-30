var obj = {

Name: function (name, title) {
	this.name = name;
	this.title = title;
}

Name.prototype.getName = function() {
	return "the name is " + this.name;
}

Name.prototype.getTitle = function() {
	return "the title is " + this.title;
}

Person: function (id, department) {
	this.id = id;
	this.department = department;
}

Person.prototype.getId = function() {
	return "the id is " this.id;
}

Person.prototype.getDepartment = function() {
	return "the department is " this.department;
}

};

module.exports = obj;



