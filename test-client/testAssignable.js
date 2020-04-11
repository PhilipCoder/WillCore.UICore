import { assignable } from "../../willcore/assignable/assignable.js"
import { willCoreProxy } from "../../willcore/ui.js";

class component extends assignable {
    constructor() {
        super({}, willCoreProxy);
    }

    static get noValues() {
        return willCoreProxy;
    }



    completionResult() {
        return false;
    }

    completed() {
        document.getElementsByTagName('body')[0].innerHTML = `<h1 style="color:red">This tag is loaded vai an assignable</h1>`; 
    }
}

export {  component  };