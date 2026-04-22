import { useState } from "react"
import "./nav.css"



const Nav = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);

return (
    <nav class="navbar">
        <div class="container">
            
            <div class="logo">
            URBAN THREADS
            </div>

            
            <ul class="nav-links" id="navLinks">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            
            <div class="menu-toggle" id="menuToggle">
            ☰
            </div>

        </div>
    </nav>
)};
    
export default Nav;

  
