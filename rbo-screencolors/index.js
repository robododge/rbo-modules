//rbo-screencolors
// requires ES6 capable node, node.js usage only, not for web browser

const x256 = require('x256')


class ColorsInternal {

	constructor() {
		this.colors = {}
		this.fillColors()
		this.processEnvOverride()
	}

	fillColors () {

	 	const c = ColorsInternal.cblock()
	 	Object.keys(c).reduce(  (acc,key) => {
	 		acc[key] = '\x1b[38;5;' + x256(c[key]) + 'm';
	 		return acc
	 	}, this.colors)

	 	this.colors.reset = '\x1b[00m' 
	 		
	}

	processEnvOverride() {
		if(process.env.NODE_DISABLE_COLORS && process.env.NODE_DISABLE_COLORS == 'true'){
    		Object.keys(this.colors).forEach(key => {
        		this.colors[key] = '\x1b[00m'
    		})
    	}
	}

	static cblock ()  { 
		return {
		    pass:       [0,255,0],
		    fail:       [255,0,0],
		    info:       [0,255,255],
		    warning:    [255,127,80],
		    debug:      [255,255,0]
		 }
	}
}


const colorsI = new ColorsInternal()
const ci = colorsI.colors
module.exports.colors = ci


class RboConsole {

	logFail(m) {
		this.log(`${ci.fail}${m}${ci.reset}`)
	}

	logPass(m) {
		this.log(`${ci.pass}${m}${ci.reset}`)
	}

	logInfo(m) {
		this.log(`${ci.info}${m}${ci.reset}`)
	}

	logWarning(m) {
		this.log(`${ci.warning}${m}${ci.reset}`)
	}

	logDebug(m) {
		this.log(`${ci.debug}${m}${ci.reset}`)
	}
}

Object.setPrototypeOf(RboConsole.prototype, console);

const rboConsole = new RboConsole()
module.exports.console = rboConsole


