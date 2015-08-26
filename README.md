# spEach
forEach function for SharePoint object collection.

## Installation
```
npm install sp-each --save
```

## Usage
```js
var spEach = require('sp-each');

spEach(webs, function (current, index, collection) {
    console.log(current.get_title());
});
```

## License
MIT.
