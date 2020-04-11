const assignable = require("willcore.core/assignable/assignable");
const serverProxy = require("willcore.server/proxies/server/serverProxy.js");
const moduleRegistry = require("../helpers/moduleRegistry.js");
const path = require("path");

class coreUIAssignable extends assignable {
    constructor() {
        super({}, serverProxy);
        this.fileServiceName = null;
        this.folderPath = null;
        this.clientAssignables = [];
    }

    static get noValues() {
        return serverProxy;
    }

    addClientAssignable(assignableName, fileURL) {
        this.clientAssignables.push({ name: assignableName, fileURL: fileURL });
    }

    completionResult() {
        return false;
    }

    completed() {
        if (!this.parentProxy._moduleRegistry) {
            let registry = new moduleRegistry();
            this.parentProxy._moduleRegistry = registry;
            this.createService();
            this.createCoreFileServer();
        }
        this.validateValues();
        this.clientAssignables.forEach(entry => this.parentProxy._moduleRegistry.registerModule(entry.name, entry.fileURL));
        this.createFileServer(this.folderPath);
    }

    validateValues() {
        if (typeof this.fileServiceName !== "string" || this.fileServiceName.length === 0) {
            throw `Invalid file service activation name: ${this.fileServiceName}.`;
        }
        if (typeof this.folderPath !== "string" || this.folderPath.length === 0) {
            throw `Invalid folder path: ${this.folderPath}. The folder path should be valid string path.`;
        }
    }

    createFileServer(directory) {
        this.parentProxy[this.fileServiceName].files = directory;
    }

    createService() {
        let moduleDirectory = path.join(__dirname, "/modulesActions.js");
        let mainExecutingDirectory = this.parentProxy._assignable.pathHelper.rootDirectory;
        let relativePath = path.relative(mainExecutingDirectory, moduleDirectory);
        relativePath = "/" + relativePath.split("\\").join("/");
        this.parentProxy.modules.service = relativePath;
    }

    createCoreFileServer() {
        this.parentProxy.willcore.files = "/";
    }
}

module.exports = coreUIAssignable;