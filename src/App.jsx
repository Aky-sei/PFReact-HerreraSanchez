import './styles/App.css'
import { Navbar } from './components/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <ItemListContainer greeting={"Bienvenidos a la landing page"}></ItemListContainer>
    </>
  )
}

export default App