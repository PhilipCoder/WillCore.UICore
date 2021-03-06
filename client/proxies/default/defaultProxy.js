import { defaultProxyHandler } from "./defaultProxyHandler.js";
import { baseProxy } from "../base/baseProxy.js";

/**
 * Proxy class for the main intermediate assignable instanciation.
 */
class defaultProxy extends baseProxy{
    constructor(assignable){
        super(assignable);
    }
   /**
    * Factory method.
    * @param {Proxy} parentProxy 
    * @param {String} parentProperty 
    */
    static new(parentProxy, parentProperty,assignable){
        return new Proxy(new defaultProxy(), new defaultProxyHandler(parentProxy,parentProperty,assignable));
    }
}

export { defaultProxy };