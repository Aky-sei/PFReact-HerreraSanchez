import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'
import { ItemDetail } from './components/ItemDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/category/:cid" element={<ItemListContainer/>}/>
        <Route exact path="/item/:pid" element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App