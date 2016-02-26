import React from 'react'
import {Route} from 'react-router'

import App from './pages/App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const routes = (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='*' component={NotFound} />
  </Route>
)

export default routes
