import "../styles/footer.css"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">

          <div className="footer-urban">
            <h2>URBAN THREADS</h2>
            <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium. </p>
          </div>
          <div className="footer-links">
          
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
          </div>
         
          <div className="footer-links">
            <a href="#">Guia de tallas</a>
            <a href="#">Envios</a>
            <a href="#">Devoluciones</a>
            
          </div>
          <div className="footer-links">
            <a href="#">TW</a>
            <a href="#">FACE</a>
            <a href="#">INST</a>
          </div>
        </div>
        <p className="copy">
            © 2026 Urban Threads. Todos los derechos reservados.
            </p>
    </footer>
    )
  }
  
  export default Footer




