# willcore.uiCore Requirements

1. Same functionality as core server.
2. The assignables used in the front-end core proxy should register them selfs via a server-side assignable on the server.
3. These assignables should be loaded via a custom module loader from url /modules when an assignable is requested.
4. The assignables should be cached in the instance of the core assignable.



# willcore.ui Requirements

1. The UI assignable will be the entry point for the UI framework.
    * The assignable will take 1 string indicating the URL the views will be located at.
2. Views won't be defined on the assignable, instead it will be loaded via the router.
3. View modules will have to export named modules : 
    * view (the view function)
    * layout (the URL of the layout, relative to the site)
    * auth (function that will return true if authorized, false or a message string if unauthorized)


The UI core should not have any server-side assignables. But yet should create the endpoint for the module list. So let's say the UI framework is initialized, then the assignable for the server-side assignable, should be inherited from coreUIAssignable. The coreUIAssignable is the class that will check if the endpoint for the module list is defined or not.


## Workings of the UI framework

The idea of the UI framework is to keep things as simple as possible for the developer. It should not be required to create services etc... 

#### To create a UI web site

```javascript
//Server side
const willcore = require("willcore.core");

let willcoreInstance = willcore.new();
willcoreInstance.UI;
```

#### index.js
```javascript
import { willCoreProxy } from "/willcore/ui.js"

(async () => {
    let proyxyIntanc = await willCoreProxy.new();
    proyxyIntanc.ui;
})();
```

#### index.html
```html
<html>
    <head>
        <title>Test</title>
        <script type="module" src="/js/loadModule.js"></script>
    </head>
    <body>
        <h1>Home Page</h1>
    </body>
</html>
```
___

## Revised Spec

There will be no index.html, instead the default URL "/" will return a built up html file. There will be 2 registries, one for included javascript files, and one for CSS files. For that an executable service assignable type will have to be defined in the server module.

A start js file is located in the root that will have an arrow __function (wlilcore) => {}__. The UI assignable will have to be assigned here.

__The UI framework__ will introduce a new server assignable type viewService. This is an assignable that will:

_Example: "/views/home/partials/detail"_

* Be activated on the "/views/" activation segment.
* It will then look for a module named "homedir/home/partials/detail.server.js" and register it as an endpoint.

