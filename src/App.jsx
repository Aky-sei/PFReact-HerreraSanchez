import './styles/App.css'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'
import { ItemDetailsContainer } from './components/ItemDetailsContainer'
import { NotFound } from './components/NotFound.jsx'
import { Checkout } from './components/Checkout.jsx'
import { Cartprovider } from './context/CartContext.jsx'
import { Cart } from './components/Cart.jsx'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <BrowserRouter>
      <Cartprovider>
        <Navbar/>
        <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/category/:cid" element={<ItemListContainer/>}/>
          <Route exact path="/item/:pid" element={<ItemDetailsContainer/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Cartprovider>
    </BrowserRouter>
  )
}

export default App