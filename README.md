# spEach
forEach function for SharePoint object collection.

## Installation
```
npm install spEach
```

## Usage
```js
var spEach = require('spEach');

spEach(webs, function (current, index, collection) {
    console.log(current.get_title());
});
```

## License
MIT.
