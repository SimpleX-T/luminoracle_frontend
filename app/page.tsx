"use client";

import type React from "react";

import { useState } from "react";
import { CountdownTimer } from "@/components/countdown";
import { Roadmap } from "@/components/roadmap";
import { ParticleBackground } from "@/components/particle-background";
import { GridBackground } from "@/components/grid-background";
import Header from "@/components/header";
import { HeroSection } from "@/components/hero";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [showCountdown, setShowCountdown] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center bg-background transition-colors duration-300 relative overflow-x-hidden">
      <GridBackground />
      <ParticleBackground />

      <Header />

      <section
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          borderWidth: "none",
          height: "100vh",
          scrollbarWidth: "none",
        }}
      >
        <HeroSection setShowCountdown={setShowCountdown} />

        <section className="w-full mb-20 z-10 pt- min-h-screen flex items-center justify-center snap-start snap-always px-2 md:px-0">
          <div className="w-full mt-12 md:mt-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent inline-flex items-center gap-2">
                Development Roadmap
              </h2>
              <p className="text-gray-200 mt-2 max-w-2xl mx-auto">
                Our journey to creating the most advanced AI system with
                unprecedented utility and autonomous evolution.
              </p>
            </div>

            <Roadmap />
          </div>
        </section>

        {showCountdown && (
          <CountdownTimer
            onClose={() => setShowCountdown(false)}
            targetDate="2025-05-05T00:00:00"
          />
        )}
      </section>
      <footer className="w-full border-t border-border/40 bg-background/80 backdrop-blur-sm py-4 z-10">
        <div className="container">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link
              href="https://x.com/luminoracle"
              target="_blank"
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-full p-2 hover:bg-gray-100 hover:text-black transition-colors duration-300"
            >
              <FaXTwitter className="w-4 h-4" />
              <span className="sr-only">Follow us on X</span>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground text-center">
            By using Lumin, you agree to the Terms and Privacy.
          </div>
        </div>
      </footer>
    </main>
  );
}
