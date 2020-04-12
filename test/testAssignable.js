const assert = require('chai').assert;
const willCoreProxy = require("willcore.core");
const path = require("path");
const exec = require('child_process').exec
const willCoreModules = require("willcore.core/moduleContainer/willCoreModules.js");

describe('models-test', function () {
    before(async function () {
        require('module-alias/register');
        willCoreModules.assignables.ui = () => require("../test/mocks/testAssignable.js");
    });
    it('action-model-test', function () {
        let viewDir = path.normalize(`${__dirname}/..`);
        let core = willCoreProxy.new();
        core.testServer.server[viewDir] = 8580;
        core.testServer.http;
        core.testServer.ui;
        exec('start chrome http://localhost:8580', function (err) { });
    });
});