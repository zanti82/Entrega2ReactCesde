import "./hero.css"
import { Link } from "react-router-dom";


const Hero =() => {

   

    return(
        <section class="hero">
            <div class="hero-overlay">
                <div class="hero-content">
                <h1 class="hero-title">
                    URBAN THREADS
                </h1>
                <p class="hero-subtitle">
                    Estilo urbano, actitud auténtica
                </p>

                <div class="hero-buttons">
                   
                    <Link to="/productos" class="btn btn-primary">EXPLORA LA COLECCION</Link>
                                        
                </div>
                </div>
            </div>
        </section>
    )

}

export default Hero

