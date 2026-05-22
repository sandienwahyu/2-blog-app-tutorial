import Link from "next/link";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Toggle } from "./ui/toggle";
import { Menu, Moon } from "lucide-react";

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
    <div className="flex items-center justify-between w-full transition-all pb-1">
      <div className="flex justify-center items-center text-xl">
        <Link href={"/"}>
          Blog<span className="font-semibold">Tutor</span>{" "}
        </Link>
      </div>
      <Button variant={"outline"} className="md:hidden">
        <Menu className="h-full w-full" />
      </Button>
      <div className="hidden md:flex justify-end items-center gap-4 ">
        <Toggle aria-label="Darkmode" size="sm" variant="outline">
          <Moon className="group-data-[state=on]/toggle:fill-foreground" />{" "}
          DarkMode
        </Toggle>

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
    </div>
  );
}
