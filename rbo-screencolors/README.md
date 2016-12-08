# rbo-screencolors
Utility to easily add and remove colors printed to terminal screens.  Works best with 256 color-capable xterm screens.

##Install
```
npm install --save rbo-screencolors
```

##Usage
```
const colors = require('rbo-screencolors').colors;

console.log(`${colors.fail}Failure Message${colors.reset}`);
```

##Existing color identifiers:
```
   colors.pass;   //defaults to Green
   colors.fail;	  //defaults to Red
   colors.info;   //defuatls to Blue
   colors.warning;  //defaults to Yellow
   colors.debug;   //defaults to orange
```

##Ease of use printing
```
const rConsole = require('rbo-screencolors').console;

rConsole.logPass('This is a nice Green message for passing');
rConsole.logFail('This messge will be Red for failure');
```