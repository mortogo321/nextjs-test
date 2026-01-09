import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const products = [
  {
    id: 1,
    title: "Laptop Pro",
    price: 1299.99,
    image: "https://picsum.photos/seed/laptop/400/300",
    description:
      "A powerful laptop for professionals with high performance and long battery life.",
  },
  {
    id: 2,
    title: "Wireless Headphones",
    price: 199.99,
    image: "https://picsum.photos/seed/headphones/400/300",
    description:
      "Premium wireless headphones with noise cancellation and crystal clear sound.",
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 349.99,
    image: "https://picsum.photos/seed/watch/400/300",
    description:
      "Advanced smartwatch with health tracking, notifications, and stylish design.",
  },
];

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        ← Back to Home
      </Link>
      <div className="max-w-2xl mx-auto">
        <div className="relative w-full h-64 mb-6">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-2xl text-green-600 mb-4">
          ${product.price.toFixed(2)}
        </p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
