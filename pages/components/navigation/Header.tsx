import { useTranslation } from "next-i18next";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
    }
  }, [router]);

  return (
    <div className="z-50 fixed top-0 bg-background w-full h-20 border-b-foreground border-b-4 flex items-center justify-between md:px-16">
      <div className="flex flex-col md:w-auto w-full">
        <Link href="/">
          <p className="font-[900] whitespace-nowrap text-center font-[Roboto] text-2xl">
            {t("VELIANI SHOP")}
          </p>
          <p className="font-[900] text-center font-[Roboto] text-md">
            {t("MEAT SHOP")}
          </p>
        </Link>
      </div>
      <div className="relative md:hidden">
        {!showMenu ? (
          <div>
            <Icon
              onClick={() => setShowMenu(true)}
              className="w-12 h-12 cursor-pointer"
              icon="material-symbols:menu"
            />
          </div>
        ) : (
          <div className="w-full h-full fixed top-0 left-0 bg-[#f0e9da] font-[Roboto] font-[900] text-2xl">
            <div className="flex justify-end absolute top-3 right-3">
              <Icon
                onClick={() => setShowMenu(false)}
                className="w-8 h-8 cursor-pointer"
                icon="maki:cross"
              />
            </div>
            <div className="border-b-2 border-foreground flex flex-col md:w-auto w-full">
              <Link href="/" onClick={() => setShowMenu(false)}>
                <p className="font-[900] whitespace-nowrap text-center font-[Roboto] text-2xl">
                  {t("VELIANI SHOP")}
                </p>
                <p className="font-[900] text-center font-[Roboto] text-md">
                  {t("MEAT SHOP")}
                </p>
              </Link>
            </div>
            <div className="gap-2 flex flex-col px-2 pt-2">
              <Link href="/">
                <div className="flex items-center">
                  <Icon className="font-bold" icon="fluent:home-12-regular" />
                  <div>{t("HOME")}</div>
                </div>
              </Link>
              <Link className="flex items-center" href="/about-us">
                <Icon icon="fluent:info-12-regular" />
                <div>{t("ABOUT US")}</div>
              </Link>
              <Link className="flex items-center" href="/locations">
                <Icon icon="fluent:location-12-regular" />
                <div>{t("LOCATIONS")}</div>
              </Link>
              <Link className="flex items-center" href="/contact">
                <Icon icon="fluent:book-contacts-24-regular" />
                <div>{t("CONTACT")}</div>
              </Link>
              <Link className="flex items-center" href="/cart">
                <Icon icon="fluent:cart-16-regular" />
                <div>{t("CART")}</div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex font-[Roboto] font-[900] text-xl w-full justify-between max-w-[700px]">
        <Link href="/">
          <div className="flex items-center">
            <Icon className="font-bold" icon="fluent:home-12-regular" />
            <div>{t("HOME")}</div>
          </div>
        </Link>
        <Link className="flex items-center" href="/about-us">
          <Icon icon="fluent:info-12-regular" />
          <div>{t("ABOUT US")}</div>
        </Link>
        <Link className="flex items-center" href="/locations">
          <Icon icon="fluent:location-12-regular" />
          <div>{t("LOCATIONS")}</div>
        </Link>
        <Link className="flex items-center" href="/contact">
          <Icon icon="fluent:book-contacts-24-regular" />
          <div>{t("CONTACT")}</div>
        </Link>
        <Link className="flex items-center" href="/cart">
          <Icon icon="fluent:cart-16-regular" />
          <div>{t("CART")}</div>
        </Link>
      </div>
    </div>
  );
}
