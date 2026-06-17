import Link from "next/link";
import { NavDesktop, NavMobile } from "./NavMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full transition-all pb-1">
      <div className="flex justify-center items-center text-xl">
        <Link href={"/"}>
          Blog<span className="font-semibold text-primary">Tutor</span>{" "}
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <NavMobile />
        <div className="hidden md:flex justify-end items-center gap-4 ">
          <NavDesktop />
        </div>
      </div>
    </div>
  );
}
