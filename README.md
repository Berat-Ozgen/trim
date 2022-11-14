# trim

> Explanatory texts clipping

[![NPM](https://img.shields.io/npm/v/trim.svg)](https://www.npmjs.com/package/trim) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save trim
```

## Usage

```jsx
import React from 'react'

import { Trim } from 'trim'
import 'trim/dist/index.css'

const des =
  'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscing '

const App = () => {
  return <div>{Trim(des, 15)}</div>
}

export default App
```

## License

MIT © [Berat-Ozgen](https://github.com/Berat-Ozgen)
