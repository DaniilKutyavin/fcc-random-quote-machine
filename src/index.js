import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

import store from './store'

import './index.css'
import App from './components/App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
