"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ChevronDown, Heart, ShoppingCart, UserCircle } from "lucide-react";
import LanguageList from "./languages";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";
import { CategoryHeader } from "./category-header";
import LinkApp from "../global/LinkApp";
import { useSession } from "next-auth/react";
import UserDrop from "./UserDrop";

export default function HeaderApp({
  lng
}: {
  lng: string
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname.split("/").length === 2;
  const isAuth = pathname.includes("auth");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-16">
      <header
        className={`flex justify-between h-16 w-full shrink-0 items-center px-4 md:px-6 fixed top-0 left-0 right-0 z-[4447] ${
          isScrolled
            ? "bg-white text-black shadow"
            : isHome
            ? "text-white"
            : "bg-white text-black"
        }`}
      >
        <LinkApp lng={lng}
          href="/"
          className="mr-6 hidden lg:flex items-center gap-x-2"
        >
          <Image
            src={"/icons/logo.png"}
            width={35}
            height={70}
            className="py-4"
            alt={"logo"}
          />
          <h1 className="text-2xl font-bold">AdelBaba.net</h1>
        </LinkApp>
        <nav className="ms-auto hidden lg:flex gap-4 w-auto">
          {isAuth ? <LinksAuth lng={lng} /> : <LinksNavbar lng={lng}/>}
        </nav>
        <div className="md:hidden">
        <LinkApp lng={lng}
          href="/"
          className="flex items-center gap-x-2"
        >
          <Image
            src={"/icons/logo.png"}
            width={35}
            height={70}
            className="py-4"
            alt={"logo"}
          />
          <h1 className="text-lg font-bold">AdelBaba.net</h1>
        </LinkApp>
        </div>
        {isAuth ? <SideBarForAuth lng={lng} /> : <SideBarForApp lng={lng} />}

      </header>
      {!isHome && !isAuth && (
        <div className={"pt-16"}>
          <CategoryHeader lng={lng} />
        </div>
      )}
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aaa"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function LinksNavbar({ isMobile = false , lng}: { isMobile?: boolean , lng: string}) {
  
  const classForMobile =
    "flex gap-x-2 w-full whitespace-nowrap items-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";
  const classForDesktop =
    "flex gap-x-2 h-12 w-full whitespace-nowrap items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";

    const { data: session, status } = useSession()

    console.log(session);
  return (
    <>
      {status === "authenticated" ? <UserDrop user={session?.user}/>
      : <LinkApp lng={lng} 
        href={"/auth/sign-in"}
        className={isMobile ? classForMobile : classForDesktop}
      >
        <UserCircle className="size-8 md:size-5" />
        <span className="w-auto">Sign in / Sign up</span>
      </LinkApp>}
        <LinkApp lng={lng}
          href={"/cart"}
          className={isMobile ? classForMobile : classForDesktop}
        >
          <ShoppingCart className="size-8 md:size-5" />
          <span>Cart</span>
        </LinkApp>
      <LinkApp lng={lng}
        href={"/wishlist"}
        className={isMobile ? classForMobile : classForDesktop}
      >
        <Heart className="size-8 md:size-5" />
        <span>wishlist</span>
      </LinkApp>
      <LanguageList />
    </>
  );
}

function SideBarForApp({
  lng
}: {
  lng: string
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="z-[81781454718]">
        <LinkApp lng={lng}
          href="/"
          className="mr-6 flex items-center gap-x-2"
          
        >
          <Image
            src={"/icons/logo.png"}
            width={35}
            height={70}
            className="py-4"
            alt={"logo"}
          />
          <h1 className="text-xl font-bold">AdelBaba.net</h1>
        </LinkApp>
        <div className="grid gap-2 py-6">
          <LinksNavbar lng={lng} isMobile />
        </div>
      </SheetContent>
    </Sheet>
  );
}

function SideBarForAuth({
  lng
}: {
  lng: string
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="z-[81781454718]">
        <LinkApp lng={lng}
          href="/"
          className="mr-6 flex items-center gap-x-2"
          
        >
          <Image
            src={"/icons/logo.png"}
            width={35}
            height={70}
            className="py-4"
            alt={"logo"}
          />
          <h1 className="text-xl font-bold">AdelBaba.net</h1>
        </LinkApp>
        <div className="grid gap-2 py-6">
          <LinksAuth lng={lng}/>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function LinksAuth({ isMobile = false, lng }: { isMobile?: boolean , lng: string}) {
  const pathname = usePathname()
  const classForMobile =
    "flex gap-x-2 w-full whitespace-nowrap items-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";
  const classForDesktop =
    "flex gap-x-2 h-9 w-full whitespace-nowrap items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50";

 
  

  return (
    <> 
      {(pathname.includes('sign-up') || pathname.includes('sign-in')) ? <LinkApp lng={lng}
        href={"/auth/become-a-seller"}
        // className={isMobile ? classForMobile : classForDesktop}
        >
        <Button>
        <span className="w-auto">Become a Seller</span>
      </Button>
      </LinkApp>: 
          <LinkApp lng={lng}
          href={"/auth/sign-in"}
          // className={isMobile ? classForMobile : classForDesktop}
          >
          <Button>
          <span className="w-auto">Sign In</span>
        </Button>
        </LinkApp>
      }
      
      <LanguageList />
    </>
  )
}
