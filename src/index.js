import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

ReactDOM.render(
    <Router>
        <Route exact path = '/:sessionId' component = { App } />
    </Router>
    , document.getElementById('root')
);

serviceWorker.unregister()
