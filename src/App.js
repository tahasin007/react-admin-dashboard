import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './style.css'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import ProductList from './pages/productList/ProductList'
import Product from './pages/product/Product'
import NewProduct from './pages/newProduct/NewProduct'

function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/users' exact>
            <UserList />
          </Route>
          <Route path='/users/:id'>
            <User />
          </Route>
          <Route path='/newUser'>
            <NewUser />
          </Route>
          <Route path='/products' exact>
            <ProductList />
          </Route>
          <Route path='/products/:id'>
            <Product />
          </Route>
          <Route path='/newProduct'>
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
