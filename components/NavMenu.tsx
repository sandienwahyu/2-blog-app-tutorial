"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

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

export function NavMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="md:hidden">
          <Menu className="h-full w-full" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-xl">
            Blog<span className="font-semibold text-primary">Tutor</span>{" "}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-1 flex-col items-start justify-start gap-4 text-lg px-2">
          {menuList.map((menu) => (
            <Link
              key={menu.text}
              href={menu.href}
              className="text-foreground w-full rounded-md p-2 hover:bg-muted/50 hover:text-foreground/80 data-[state=open]:bg-muted/50 data-[state=open]:text-foreground/80"
            >
              <div>{menu.text}</div>
            </Link>
          ))}
        </nav>
        <SheetFooter>
          <Button className="cursor-pointer">Logout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function NavDesktop() {
  return (
    <div className="hidden md:flex justify-end items-center gap-4 ">
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
  );
}
