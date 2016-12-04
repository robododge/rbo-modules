
const rboConsole = require('../').console
const colors = require('../').colors

var chai = require('chai')
// Unit Test Modules
var assert = chai.assert
var fail = assert.fail


describe('Logging capabilities', () => {


   it('should log without erroring out', (done) => {
		rboConsole.logFail("Fail message")
		rboConsole.log("Regular message")
		rboConsole.logPass("Pass message")
		rboConsole.logDebug("Debug message")
		rboConsole.logWarning("Warning message")
		rboConsole.warn("Regular warn")
		done()

   })
})


describe('Xterm colors', ()=> {
	it('Should be defined ', () => {
		assert.isDefined(colors)
	})

	it('Should have 6 color states', () => {
		assert.equal(Object.keys(colors).length, 6, 'doesnt have 6 color states')
	})

	it('Should have expected codes for terminal colors', () => {
		assert.match(colors.fail, /^.*\[38;5;196m/, 'did not match fail terminal colors')
		assert.match(colors.debug, /^.*\[38;5;226m/, 'did not match debug terminal colors ')
	})
})
