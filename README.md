# aster-parse-babel

> Aster parse ES6 with babel.

## Usage

First, install `aster-parse-babel` as a development dependency:

```shell
npm install --save-dev aster-parse-babel
```

Then, register it to your build script:

```javascript
var aster = require("aster");

aster.src.registerParser('.js', require('aster-parse-babel'));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster-parse-babel
[npm-image]: https://badge.fury.io/js/aster-parse-babel.png

[travis-url]: http://travis-ci.org/othree/aster-parse-babel
[travis-image]: https://secure.travis-ci.org/othree/aster-parse-babel.png?branch=master
