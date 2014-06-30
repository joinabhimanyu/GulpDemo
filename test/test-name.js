var assert = require('assert');
var obj = require('../lib/name');

var newname = new obj.Name("abhi", "chak");


assert.equal(newname.getName(), "the name is abhi");
assert.equal(newname.getTitle(), "the title is chak");

