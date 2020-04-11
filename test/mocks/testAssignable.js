const coreUIAssignable = require("../../server/coreUIAssignable.js");

class testAssignable extends coreUIAssignable{
    constructor(){
        super();
        this.fileServiceName = "testModule";
        this.folderPath = "/";
        this.addClientAssignable( "test", "/testModule/test-client/testAssignable.js");
    }
}

module.exports = testAssignable;