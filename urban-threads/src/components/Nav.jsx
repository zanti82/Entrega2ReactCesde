import { useState } from "react"
import "./nav.css"
import { Link } from "react-router-dom";




const Nav = () => {

   
    
    const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav class="navbar">
        <div class="container">
            
            <div class="logo">
            URBAN THREADS
            </div>

            
            <ul class="nav-links" id="navLinks">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>

            
            <div class="menu-toggle" id="menuToggle">
            ☰
            </div>

        </div>
    </nav>
)};
    
export default Nav;

  
