import {Switch, Route} from 'react-router-dom'
import Login from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Product from './components/Product'
import Cart from './components/Cart'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/product" component={Product} />
    <Route exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
