import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
