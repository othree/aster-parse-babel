# aster-parse-babel

> Parse babel with aster.

## Usage

First, install `aster-parse-babel` as a development dependency:

```shell
npm install --save-dev aster-parse-babel
```

Then, add it to your build script:

```javascript
var aster = require('aster');
var parseBabel = require('aster-parse-babel');

aster.src('src/**/*.js')
.map(parseBabel({
  stringOption: 'value'
}))
.map(aster.dest('dist'))
.subscribe(aster.runner);
```

## API

### parseBabel(options)

#### options.stringOption
Type: `String`

Some string option.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster-parse-babel
[npm-image]: https://badge.fury.io/js/aster-parse-babel.png

[travis-url]: http://travis-ci.org/othree/aster-parse-babel
[travis-image]: https://secure.travis-ci.org/othree/aster-parse-babel.png?branch=master
