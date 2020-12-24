import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import {
  Home,
  Favorite
} from './pages/index'
import Navbar from './components/Navbar'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='/favorite'>
            <Favorite />
          </Route>

        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
