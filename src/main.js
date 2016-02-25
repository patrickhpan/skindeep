import 'babel-polyfill'
import 'normalize.css'
import './css/style.scss'
import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory as history } from 'react-router'
// do prefer import { browserHistory } from 'react-router'
import attachFastClick from 'fastclick'
import routes from './routes'

attachFastClick.attach(document.body)

// Expose globally
window.React = React

ReactDOM.render(
  <Router
    children={routes}
    history={history}
  />,
  document.getElementById('root')
)
