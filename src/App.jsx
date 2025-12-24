import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenido a Cine Ducuing" />}
        />
      </Routes>
    </>
  )
}

export default App
