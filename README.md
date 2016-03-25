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

INSTALLING
==========

``` bash
npm install ts-left-pad
```

NOTES
=====

As it turns out, I think the ts compiler removes stuff that would handle type-checking at runtime, so coding defensively against the user at runtime might be a wiser choice.

<a name="what1">1</a>: Wanted a template project to play with typescript tooling: travis, tests, publishing for npm usage.
