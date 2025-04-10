"use client";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-sm fixed z-50 top-0">
      <div className="container flex h-14 items-center justify-between">
        <Link className="flex items-center gap-2 w-12 h-12" href="/">
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
              src="https://www.seekeroracle.com/dexscreener_logo.svg"
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
          <Button variant="outline" size="sm">
            Email Login
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.057-1.036-.202-1.625z"
                fill="currentColor"
              />
            </svg>
            Login with Google
          </Button>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  );
}
