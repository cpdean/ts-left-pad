ts-left-pad
===========

THE ONLY TYPE SAFE WAY<sup>[1](#what1)</sup> TO PAD A STRING ON THE LEFT OF THE STRING

``` javascript
var theleft = require("ts-left-pad");

theleft("goat", 10)
// '      goat'

theleft("goat", 10, ".")
// '......goat'
```

<a name="what1">1</a>: Wanted a silly template project to play with typescript tooling: travis, tests, publishing for npm usage.
