import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Laptop Pro",
    price: 1299.99,
    image: "https://picsum.photos/seed/laptop/400/300",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199.99,
    image: "https://picsum.photos/seed/headphones/400/300",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 349.99,
    image: "https://picsum.photos/seed/watch/400/300",
  },
];

export { products };

export default function ProductGrid() {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">7. Product Cards (Grid)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
