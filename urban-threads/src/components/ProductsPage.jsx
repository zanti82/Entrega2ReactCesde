import ProductCard from "../components/ProductCard";
import "./productsCard.css"

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: "Hoodie Urbana",
      price: "120.000",
      image: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "Camiseta Street",
      price: "80.000",
      image: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      title: "Gorra Classic",
      price: "45.000",
      image: "https://via.placeholder.com/300"
    },
    {
      id: 4,
      title: "Pantalón Cargo",
      price: "150.000",
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <main className="products-page">
      <h1 className="title">Nuestros Productos</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
};

export default ProductsPage;