"use client";
import { FaGoogle, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-sm fixed z-50 top-0">
      <div className="container flex h-14 items-center justify-between">
        <Link
          className="flex items-center gap-2 w-8 md:w-12 h-8 md:h-12"
          href="/"
        >
          <img
            src="/logo.png"
            alt="lumin"
            className="w-full h-full object-cover"
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="https://dexscreener.com/sol/luminoracle"
            target="_blank"
            className="p-2 hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center group w-10 h-10"
          >
            <Image
              width={150}
              height={150}
              src="/dexscreener_logo.svg"
              alt="dexscreener"
              className="w-full h-full object-cover group-hover:invert transition-colors duration-300"
            />
            {/* <Dex size={20} /> */}
          </Link>
          <Link
            href="https://x.com/luminoracle"
            target="_blank"
            className="p-2 text-white hover:text-black hover:bg-gray-300 transition-colors duration-300"
          >
            <FaXTwitter size={20} />
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:inline-block"
          >
            Email Login
          </Button>
          <Button variant="outline" size="sm" className="gap-1 hidden md:flex">
            <FaGoogle />
            Login with Google
          </Button>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
