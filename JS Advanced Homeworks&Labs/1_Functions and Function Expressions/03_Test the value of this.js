function testContext() {
    console.log(this);
}

function invokeTestContext() {
    testContext();
}
//------- this is Document -------
testContext();

//------- still Document, but the current 'this' is inside another function
//invokeTestContext();

//------- pointless!!!
//new testContext();