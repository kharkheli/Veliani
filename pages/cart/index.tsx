import { useTranslation } from "next-i18next";
import Link from "next/link";
import useLocalStorageState from "use-local-storage-state";
import { useMemo } from "react";
import { Icon } from "@iconify/react";

export default function Cart() {
  const { t } = useTranslation();
  const [cart, setCart] = useLocalStorageState<any>("cart");

  const total = useMemo(() => {
    return cart
      .filter((product: any) => product.selected)
      .reduce((acc: number, product: any) => {
        return acc + (product.sale_price ?? product.price) * product.amount;
      }, 0);
  }, cart);

  function handleInputChange(e: any, index: number) {
    if (Number.isNaN(e.target.value)) return;
    const newCart = cart.map((product: any, i: number) => {
      if (i === index) {
        return { ...product, amount: e.target.value };
      }
      return product;
    });
    setCart(newCart);
  }

  function handleRemoveProduct(index: number) {
    const newCart = cart.filter((_: any, i: number) => i !== index);
    setCart(newCart);
  }

  function handleSelectProduct(index: number) {
    const newCart = cart.map((product: any, i: number) => {
      if (i === index) {
        return { ...product, selected: !product.selected };
      }
      return product;
    });
    setCart(newCart);
  }

  function selectAllProducts(select: boolean) {
    const newCart = cart.map((product: any) => {
      return { ...product, selected: select };
    });
    setCart(newCart);
  }

  return (
    <>
      {cart?.length ? (
        <div className="flex pt-10">
          <div className="p-3 bg-white/40 flex flex-col rounded w-full">
            <div className="flex items-center justify-between">
              <h3 className=" text-3xl font-bold font-[Roboto]">
                {t("Shopping Cart")}
              </h3>
            </div>
            <div className="flex justify-between items-end">
              {cart.some((item: any) => !item.selected) ? (
                <p
                  onClick={() => selectAllProducts(true)}
                  className="cursor-pointer text-sm text-blue-500 underline font-bold"
                >
                  {t("Select All Items")}
                </p>
              ) : (
                <p
                  onClick={() => selectAllProducts(false)}
                  className="cursor-pointer text-sm text-blue-500 underline font-bold"
                >
                  {t("Deselect All Items")}
                </p>
              )}
              <p className="font-bold text-sm">{t("Price")}</p>
            </div>

            {cart &&
              cart.map((product: any, index: number) => (
                <div
                  key={index}
                  className="flex gap-2 py-4 border-t border-foreground items-center"
                >
                  <input
                    type="checkbox"
                    checked={product.selected}
                    onChange={() => handleSelectProduct(index)}
                  />
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
                    <div className="mt-auto mb-0 flex gap-2 items-center">
                      <input
                        className="w-20 rounded px-2 py-1"
                        type="number"
                        step={0.1}
                        value={product.amount}
                        onChange={(e) => handleInputChange(e, index)}
                      />
                      <p className="text-lg font-bold">KG</p>
                      <div>
                        <button
                          className="ml-2 text-sm text-blue-500 underline"
                          onClick={() => handleRemoveProduct(index)}
                        >
                          {t("remove")}
                        </button>
                      </div>
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
                  <p>{total}₾</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <p>{t("Shipping")}</p>
                  <p>5₾</p>
                </div>
                <div className="flex justify-between items-center py-2">
                  <p>{t("Total")}</p>
                  <p>{total + 5}₾</p>
                </div>
                <button className="bg-[#ffa41c] text-foreground py-2 px-4 font-[600] rounded mt-2">
                  {t("Buy now")}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-10">
          <div className="rounded flex flex-col p-5 items-center bg-white/40">
            <h4 className=" text-xl font-bold">
              {t("Your Veliani Cart is Empty")}
            </h4>
            <div>
              <Link href={"/"} className="text-blue-500 underline">
                {t("Continue Shopping")}
              </Link>
            </div>
            <Icon
              className="w-32  h-32 text-black/40"
              icon="fluent:cart-16-regular"
            />
          </div>
        </div>
      )}
    </>
  );
}
