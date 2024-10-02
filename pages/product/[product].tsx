import { useRouter } from "next/router";
import Header from "@/pages/components/navigation/Header";
import { useTranslation } from "next-i18next";
import Product from "@/pages/components/Product";

const product = {
  id: 1,
  name: "Beef",
  price: 100,
  sale_price: 90,
  images: ["/media/img.png", "/media/img.png"],
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
  species: "Cow",
};

export default function Prod(props: any) {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div>
      <div className=" md:px-16">
        <div className="flex pt-0 md:pt-10 flex-col md:flex-row">
          <img
            className="w-full md:w-1/2 shrink-0 rounded object-cover"
            src={product.images[0]}
            alt={product.name}
          />
          <div className="flex flex-col md:pl-5 px-2">
            <p className="font-[900] text-3xl">{product.name}</p>
            <p className="text-gray-500 text-lg">{product.species}</p>
            <p className="text-gray-700 text-lg">{product.description}</p>
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
            <div className="mt-auto mb-0">
              <div className="flex items-center gap-1 mt-auto">
                <input
                  step={0.1}
                  type="number"
                  className="w-24 rounded h-10 py-1 px-2"
                />{" "}
                <p className="font-bold text-lg">KG</p>
              </div>
              <div className="flex items-end gap-4">
                <button
                  className="bg-[#ffd814] text-foreground py-2 px-4 font-[600] rounded mt-2"
                  onClick={() => router.push("/cart")}
                >
                  {t("Add to cart")}
                </button>
                <button
                  className="bg-[#ffa41c] text-foreground py-2 px-4 font-[600] rounded mt-2"
                  onClick={() => router.push("/cart")}
                >
                  {t("Buy now")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 mb-5 md:px-0 px-2">
          <h3 className="text-3xl font-bold font-[Roboto] tracking-wider">
            {t("Similar Products")}
          </h3>
        </div>
        <div className="p-2 md:p-0 grid md:grid-cols-4 gap-4 grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
            <Product product={{ ...product, id: item }} key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
