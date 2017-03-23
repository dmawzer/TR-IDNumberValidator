# TR-IDNumberValidator
Validate Turkish ID Number on js.

## Installation

### Using npm

```sh
$ npm install tr-idnumbervalidator
```

## Usage

```js
var validator = require('tr-idnumbervalidator')

var result = validator.validateTRIDNumber(12345678901);
console.log(result);

//if return true it is passed
```