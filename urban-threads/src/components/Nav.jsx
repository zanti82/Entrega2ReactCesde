import "../styles/nav.css"
import { Link } from "react-router-dom";
import { getLocalSotarge, removeLocalStorage } from "../helpers/local-storage";

const Nav = () => {

   const nombreMensaje = getLocalSotarge("mensaje")

 
return (
    <nav className="navbar">
        <div className="container">
            
            <div className="logo">
            URBAN THREADS
            </div>

            {nombreMensaje ? <span>{nombreMensaje.nombre}</span> : <span>invitado</span>}
            
            
            <button onClick={() => {
                removeLocalStorage("mensaje");
                window.location.reload();
                }}>
                Cerrar sesión
            </button>

            
            <ul className="nav-links" id="navLinks">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>

            
            <div className="menu-toggle" id="menuToggle">
            ☰
            </div>

        </div>
    </nav>
)};
    
export default Nav;

  
