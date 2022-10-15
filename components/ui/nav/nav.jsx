import Link from "next/link";
import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import Logo from "../Logo";

function Nav() {
  return (
    <nav className=" bg-[#1C1E53] text-white">
      <div className=" flex justify-between items-center  mx-auto max-w-[80%]">
        <Logo />
        {/* desktopMenu */}
        <div className=" hidden laptop:flex items-center gap-6 font-[500]">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About Us</Link>
          <Link href={"/features"}>Features</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <Link href={"#faq"}>Faq</Link>
          <Link href={"/blogs"}>Blog</Link>
          <Link href={"/contact"}>
            <button className="border rounded-full px-4 py-2">
              Contact us
            </button>
          </Link>
        </div>
        <BiMenuAltRight className="text-3xl md:text-4xl laptop:hidden" />
      </div>
    </nav>
  );
}

export default Nav;
