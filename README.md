# sp-each
Each function for SharePoint object collection.

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

## License
MIT.
