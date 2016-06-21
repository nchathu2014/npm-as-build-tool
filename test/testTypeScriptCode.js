var should  = require('should');
var greeter = require('../lib/tsCode.js');


describe('Typescript is compiled OK',function(){
	it('when this passed',function(){
		var g = new greeter();
		g.greet("Nuwan").should.equal("A type script greetingn to you Nuwan");
	});
});