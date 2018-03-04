import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Headermenu from './headermenu'
import inventory from './inventory'
import home from './home'
import notFound from './404'

const App = () => (   
    <Router>
        <div style={{minHeight: 200}}>
            <Headermenu />
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/inventory" component={inventory} />
                <Route component={notFound} />
            </Switch>
        </div>
    </Router>
)

export default App