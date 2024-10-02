import Link from "next/link"; //import this
interface Product {
  id: number;
  name: string;
  price: number;
  sale_price?: number;
  images: string[];
  description: string;
  species: string;
}

export default function Product({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="flex flex-col rounded overflow-hidden p-3 bg-white/40"
    >
      <img className="rounded" src={product.images[0]} alt={product.name} />
      <div className="pt-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-end font-[Creepster] justify-start pt-2">
          {product.sale_price && (
            <p className="font-[Creepster] text-2xl text-red-500 pl-2">
              {product.sale_price}₾
            </p>
          )}
          <p
            className={`${
              product.sale_price
                ? "text-gray-500 text-lg line-through"
                : "text-2xl"
            }`}
          >
            {product.price}₾
          </p>
        </div>
      </div>
    </Link>
  );
}
