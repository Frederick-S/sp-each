# sp-each
Iterates over enumerable SharePoint client object.

## Installation
```
npm install sp-each --save
```

## Usage
### JavaScript
```js
import { each } from 'sp-each';

each(webs, function (current, index, collection) {
    console.log(current.get_title());
});
```

### TypeScript
```
typings install dt~microsoft.ajax --global --save
typings install dt~sharepoint --global --save
```

```js
/// <reference path="typings/index.d.ts" />

import { each } from 'sp-each';

each<SP.Web>(webs, function (web: SP.Web, index: number, webs: SP.WebCollection) {
    console.log(web.get_title());
});
```

## Test
```
cd sp-each/test/Scripts/src
npm install
webpack
```

Then open the project under test folder by Visual Studio and deploy the Add-in.

## License
MIT.
