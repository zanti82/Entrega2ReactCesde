import "./products.css"


const Products = () => {
    return (
        <section className="products">
        <h2 className="section-title">Nuestros Productos</h2>
      
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="producto" />
            <h3>Hoodie Urbana</h3>
            <p>$120.000</p>
          </div>
      
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="producto" />
            <h3>Camiseta Street</h3>
            <p>$80.000</p>
          </div>
      
          <div className="product-card">
            <img src="https://via.placeholder.com/300" alt="producto" />
            <h3>Gorra Classic</h3>
            <p>$45.000</p>
          </div>
        </div>
      </section>
    )
  }
  
  export default Products