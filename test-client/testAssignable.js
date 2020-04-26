import { assignable } from "../../willcore/assignable/assignable.js"
import { willCoreProxy } from "../../willcore/ui.js";

class component extends assignable {
    constructor() {
        super({ string: 1 }, willCoreProxy);
    }

    // static get noValues() {
    //     return willCoreProxy;
    // }



    completionResult() {
        return false;
    }

    completed() {
        document.getElementsByTagName('body')[0].innerHTML = `<h1 style="color:red">${this.propertyName}${this.bindedValues.string[0]}</h1>`;
    }
}

export { component };