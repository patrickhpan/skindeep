import 'babel-polyfill'
// import 'normalize.css'
import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// only for GitHub pages
// do prefer import { browserHistory } from 'react-router'
import {Router, hashHistory as history} from 'react-router'
import attachFastClick from 'fastclick'
import routes from './routes'

// Remove 300ms tap delay on mobile devices
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
