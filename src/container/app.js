import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Headermenu from '../components/headermenu'
import notFound from '../components/alert404'
import inventory from './inventory'
import Home from './home'
import Vendorcenter from './vendorcenter'

const App = () => (
  <Router>
    <div style={{ minHeight: 160 }}>
      <Headermenu />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/inventory' component={inventory} />
        <Route path='/vendor-center' component={Vendorcenter} />
        <Route component={notFound} />
      </Switch>
    </div>
  </Router>
)
export default App
