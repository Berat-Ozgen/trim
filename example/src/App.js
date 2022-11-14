import React from 'react'

import { Trim } from 'trim'
import 'trim/dist/index.css'

const des =
  'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscinglorem ipsum dolor sit amet, consectetur adipiscing '

const App = () => {
  return <div>{Trim(des, 15)}</div>
}

export default App
