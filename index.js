const greetModule = require( './build/Release/greet.node' );

// see properties on 'exports' object
console.log( 'exports : ', greetModule );
console.log();

// exectute the 'greetHello' function
console.log( 'greetModule.greetHello() : ', greetModule.greetHello( "Big Dyl" ) );
console.log();
