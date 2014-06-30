var assert = require('assert');
var obj = require('../lib/name');

var newname = new obj.Name("abhi", "chak");
var newperson = new obj.Person("10", "R & D");

assert.equal(newname.getName(), "the name is abhi");
assert.equal(newname.getTitle(), "the title is chak");

assert.equal(newperson.getId(), "the id is 10");
assert.equal(newperson.getDepartment(), "the department is R & D");