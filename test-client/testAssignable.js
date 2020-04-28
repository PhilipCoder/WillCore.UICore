import { assignable } from "../../willcore/assignable/assignable.js"
import { willCoreProxy } from "../../willcore/ui.js";

class component extends assignable {
    constructor() {
        super({ function: 2 }, willCoreProxy);
    }

    static get noValues() {
        return willCoreProxy;
    }



    completionResult() {
        return false;
    }

    completed() {
        document.getElementsByTagName('body')[0].innerHTML = `<h1 style="color:red">${this.propertyName}${this.bindedValues.function[1]()}</h1>`;
    }
}

export { component };