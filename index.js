const addon = require( './build/Release/greet.node' );
exports.hello = addon.greetHello;

// see properties on 'exports' object
console.log( 'exports : ', addon );
console.log();

// exectute the 'greetHello' function
// console.log( 'greetModule.greetHello() : ', greetModule.greetHello( "Big Dyl" ) );
// console.log();
