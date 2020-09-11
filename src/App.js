import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/blocks/Header/component'
import Characters from './components/pages/Characters'
import Locations from './components/pages/Locations'
import Episodes from './components/pages/Episodes'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/characters" component={Characters}/>
          <Route path="/locations" component={Locations}/>
          <Route path="/episodes" component={Episodes}/>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
