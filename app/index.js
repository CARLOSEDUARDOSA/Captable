import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Layout from './components/Layout.js'

import Home from './containers/Home.js'

render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}/>
    </Route>
  </Router>
), document.getElementById('root'))
