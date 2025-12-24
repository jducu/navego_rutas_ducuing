import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <h2>CineDucuing</h2>

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/accion">Acción</Link></li>
        <li><Link to="/category/comedia">Comedia</Link></li>
        <li><Link to="/category/drama">Drama</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
