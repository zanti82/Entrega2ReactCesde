import ProductCard from "../components/ProductCard";
import "../styles/productsCard.css"

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: "Baggy Urbana",
      price: "120.000",
      image: "/1001.jpg"
    },
    {
      id: 2,
      title: "Cargo Street",
      price: "80.000",
      image: "/4405.jpg"
    },
    {
      id: 3,
      title: "Cargo Classic",
      price: "95.000",
      image: "/4405k.jpg"
    },
    {
      id: 4,
      title: "Baggy Cargo",
      price: "150.000",
      image: "/1004.jpg"
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