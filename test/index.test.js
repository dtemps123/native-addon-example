const assert = require( 'assert' );
const greet = require( '..' ); // loads ../index.js

it( 'should return `Hello Big Dyl!`', () => {
    const result = greet.hello( 'Big Dyl' ); // returns 'Hello Big Dyl!'
    assert.equal( 'Hello Big Dyl!', result );
} );
