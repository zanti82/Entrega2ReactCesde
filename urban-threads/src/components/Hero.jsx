import "../styles/hero.css"
import { Link } from "react-router-dom";


const Hero =() => {

   

    return(
        <section className="hero">
            <div className="hero-overlay">
                <div className="hero-content">
                <h1 className="hero-title">
                    URBAN THREADS
                </h1>
                <p className="hero-subtitle">
                    Estilo urbano, actitud auténtica
                </p>

                <div className="hero-buttons">
                   
                    <Link to="/productos" className="btn btn-primary">EXPLORA LA COLECCION</Link>
                                        
                </div>
                </div>
            </div>
        </section>
    )

}

export default Hero

