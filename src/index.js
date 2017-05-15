import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import 'tachyons'
import 'font-awesome/css/font-awesome.css'

import {App} from 'view/App'

import {store} from 'state/store'

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))
