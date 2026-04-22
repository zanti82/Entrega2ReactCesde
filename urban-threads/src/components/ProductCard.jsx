

const ProductCard = ({ image, title, price }) => {
    return (
      <div className="product-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>${price}</p>
        <button className="btn-buy">Comprar</button>
      </div>
    );
  };
  
  export default ProductCard;