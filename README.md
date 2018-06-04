# babel-plugin-hash-resolve

Sick of all those `require('../../../something.js')`  We all are.
heres another differnet solution to that problem, I call it #paths

instead of

```js
import React, { Component } from 'react'
import Container from '../../shared-components/Container'
import { colors, fillFields } from '../../shared-components/helpers'
import SearchBox from '../../shared-components/SearchBox'
```

it would be

```js
import React, { Component } from 'react'
import Container from '#/shared-components/Container'
import { colors, fillFields } from '#/shared-components/helpers'
import SearchBox from '#/shared-components/SearchBox'
```

## How does it work:

It goes up the up the path, ie if the file is located src/components/SearchComponent/index.js
it would start by looking for
`src/components/SearchComponent/shared-components/SearchBox -> ./`
then:
`src/components/shared-components/SearchBox -> ../`
then:
`src/shared-components/SearchBox -> ../../`
which is where the file exists. and therefore the path will be ../../ when compiled.


## How to install:
`npm i --save babel-plugin-hash-resolve` or `yarn add babel-plugin-hash-resolve`
```json
// .babelrc
"plugins": [
    "babel-plugin-hash-resolve"
]

```

if your using eslint you may need to turn these off:

```
 'import/no-unresolved': 'off',
 'import/extensions': 'off'
```

## Other Options:

* https://github.com/patrick-steele-idem/app-module-path-node

* https://lostechies.com/derickbailey/2014/02/20/how-i-work-around-the-require-problem-in-nodejs/

If you got a differnt solutions to this problem pull request and add it to this list.

## Why I like this method: