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

How does it work:

<TODO>

Other Options:

* https://github.com/patrick-steele-idem/app-module-path-node

* https://lostechies.com/derickbailey/2014/02/20/how-i-work-around-the-require-problem-in-nodejs/

If you got a differnt solutions to this problem pull request and add it to this list.