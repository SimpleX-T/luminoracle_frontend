"use client";

import { Menu } from "lucide-react";
import { ModelSelector } from "./model-selector";
// import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-sm fixed z-50 top-0">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="hidden md:flex items-center gap-2">
            <ModelSelector />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* <Button variant="outline" size="sm" className="hidden md:flex">
              App Builder
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex gap-1"
            >
              <span className="sr-only">VSCode</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 3.75V20.25L4.5 16.5V7.5L16.5 3.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 3.75L20.25 2.25V18.75L16.5 20.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 9L4.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.5 9.75L4.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              VSCode
            </Button> */}

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
