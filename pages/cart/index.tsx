import { useTranslation } from "next-i18next";
import Link from "next/link";

const product = {
  id: 1,
  name: "Beef",
  price: 100,
  sale_price: 90,
  images: ["/media/img.png", "/media/img.png"],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
  species: "Cow",
  amount: 1.1,
};

export default function Cart() {
  const { t } = useTranslation();

  return (
    <div className="flex pt-10">
      <div className="p-3 bg-white/40 flex flex-col rounded w-full">
        <div className="flex pb-2 items-center justify-between">
          <h3 className=" text-3xl font-bold font-[Roboto]">
            {t("Shopping Cart")}
          </h3>
          <p className="font-bold text-lg">{t("Price")}</p>
        </div>

        {[1, 2, 3, 4, 5].map((item) => (
          <div className="flex gap-2 py-4 border-t border-foreground items-center">
            <input type="checkbox" />
            <Link
              className="w-64 h-40 shrink-0"
              href={`/product/${product.id}`}
              target={"_blank"}
            >
              <img
                className="size-full object-cover rounded"
                src={product.images[0]}
                alt={product.name}
              />
            </Link>

            <div className="h-full flex items-start justify-start flex-col">
              <Link
                target={"_blank"}
                href={`/product/${product.id}`}
                className="text-2xl font-bold"
              >
                {product.name}
              </Link>
              <p className="text-gray-500 text-lg">{product.species}</p>
              <p className="text-gray-700 text-lg line-clamp-2">
                {product.description}
              </p>
              <div className="flex gap-2 items-center">
                <input
                  className="w-20 rounded px-2 py-1"
                  type="number"
                  step={0.1}
                />
                <p className="text-lg font-bold">KG</p>
              </div>
            </div>
            <div className="h-full font-bold">
              {product.sale_price ?? product.price}₾
            </div>
          </div>
        ))}
      </div>
      <div className="w-72 shrink-0 pl-4 rounded">
        <div className="bg-white/40">
          <div className="p-3">
            <h3 className="text-3xl font-bold font-[Roboto] tracking-wider">
              {t("Order Summary")}
            </h3>
            <div className="flex justify-between items-center py-2">
              <p>{t("Subtotal")}</p>
              <p>{product.price}₾</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>{t("Shipping")}</p>
              <p>0₾</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p>{t("Total")}</p>
              <p>{product.price}₾</p>
            </div>
            <button className="bg-[#ffa41c] text-foreground py-2 px-4 font-[600] rounded mt-2">
              {t("Buy now")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
