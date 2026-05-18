"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export default function Header() {
  const menuList: { text: string; href: string }[] = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Portfolio",
      href: "/portfolio",
    },
    {
      text: "Blog",
      href: "/blog",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <header className="flex items-center justify-between py-2 px-4">
      <div className="text-xl">
        <Link href={"/"}>
          Blog<span className="font-semibold">Tutor</span>{" "}
        </Link>
      </div>
      <div className="flex justify-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            {menuList.map((menu) => (
              <NavigationMenuItem key={menu.text}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={menu.href} className="dark:text-foreground">
                    {menu.text}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="cursor-pointer">Logout</Button>
      </div>
    </header>
  );
}
