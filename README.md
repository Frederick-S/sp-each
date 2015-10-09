# sp-each
Each function for SharePoint object collection.

## Installation
```
npm install sp-each --save
```

## Usage
```js
var each = require('sp-each');

each(webs, function (current, index, collection) {
    console.log(current.get_title());
});
```

## License
MIT.
