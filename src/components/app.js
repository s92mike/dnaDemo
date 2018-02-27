import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Headermenu from './headermenu'
import searchList from './searchlist'
import home from './home'
import notFound from './404'

const App = () => (   
    <Router>
        <div>
            <Headermenu />
            <Switch>
                <Route exact path="/" component={home} />
                <Route path="/searchlist" component={searchList} />
                <Route component={notFound} />
            </Switch>
        </div>
    </Router>
)

export default App