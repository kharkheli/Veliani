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

export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      {/*? main*/}

      <main>
        <div className="w-full  h-96">
          <img
            className="fixed left-0 -z-10 top-20 w-full h-96 object-cover overflow-hidden"
            src="/media/cover.jpg"
            alt="cover"
          />
        </div>
        <div className="bg-background pt-5">
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
              <Product product={{ ...product, id: item }} key={item} />
            ))}
          </div>
        </div>
      </main>

      {/*?footer*/}
      <div></div>
    </div>
  );
}
