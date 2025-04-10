"use client";

import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "motion/react";
import {
  Clock,
  Figma,
  Image,
  Lock,
  Search,
  Send,
  Smartphone,
  Upload,
  Zap,
} from "lucide-react";

import { Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";

export function HeroSection({
  setShowCountdown,
}: {
  setShowCountdown: Dispatch<SetStateAction<boolean>>;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [promptText, setPromptText] = useState("");
  const promptRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const texts = [
      "What is the future of AI?",
      "How can I optimize my business with AI?",
      "Analyze the latest market trends...",
      "Design a sustainable energy solution...",
      "Compose a symphony in C minor...",
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const pauseTime = 2000;

    const typePrompt = () => {
      const currentText = texts[currentTextIndex];

      if (isDeleting) {
        setPromptText(currentText.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        setPromptText(currentText.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && currentCharIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = pauseTime;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % texts.length;
      }

      setTimeout(typePrompt, typingSpeed);
    };

    setTimeout(typePrompt, 1000);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setShowCountdown(true);
    setInputValue("");
  };

  return (
    <React.Fragment>
      <section
        className="relative min-h-screen h-screen w-full flex items-center pt-20 select-none mb-20 snap-start snap-always"
        id="hero"
      >
        <div className="container mx-auto px-4 py-20 relative z-10 mt-20 md:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="inline-block px-4 py-1 bg-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-full">
                <p className="text-green-400 text-sm font-mono">
                  TRANSCENDING INTELLIGENCE
                </p>
              </div>

              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block">The Future of</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  Intelligence is Here
                </span>
              </h1>

              <p className="text-gray-300 text-md md:text-xl max-w-xl">
                Lumin redefines AI as a proactive, multimodal, self-evolving
                partner that transcends traditional boundaries, offering
                transformative potential for individuals, industries, and
                society.
              </p>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/30 to-green-600/50 rounded-xl blur opacity-30"></div>
                <div className="relative bg-black border border-green-500/30 rounded-xl p-6 overflow-hidden">
                  <div className="flex items-center gap-3 mb-4 border-b border-green-900/50 pb-4">
                    <Terminal size={20} className="text-green-400" />
                    <p className="text-green-400 font-mono text-sm">
                      LUMIN TERMINAL
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        ref={promptRef}
                        type="text"
                        className="w-full px-4 py-3 bg-black/60 border border-green-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white placeholder-gray-500 pr-12 text-sm md:text-md md:pr-20 select-none"
                        placeholder="Ask Lumin anything..."
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        disabled
                      />
                      <div className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-black/80 border border-green-500/30 rounded text-xs text-green-400 font-mono">
                        <Lock size={12} className="md:hidden" />
                        <span className="hidden md:inline-block">
                          LOCKED TILL Q4
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
                          <span className="text-green-400 text-xs">L</span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-green-900/20 border border-green-500/20 rounded-md p-3">
                            <p className="text-gray-300 text-sm">
                              I'm Lumin, an AI agent engineered to deliver
                              unprecedented utility. My capabilities include
                              hyper-adaptive reasoning, omni-task mastery, and
                              autonomous evolution.
                            </p>
                          </div>
                          <div className="mt-2 bg-green-900/20 border border-green-500/20 rounded-md p-3">
                            <p className="text-gray-300 text-sm">
                              I'll be fully operational in Q4. Join the waitlist
                              to be among the first to experience the future of
                              intelligence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t hidden md:block border-green-900/50">
                      <div className="flex items-center justify-between">
                        <p className="text-green-400 font-mono text-xs">
                          DEVELOPMENT PROGRESS
                        </p>
                        <p className="text-green-400 font-mono text-xs">78%</p>
                      </div>
                      <div className="mt-2 h-1 bg-black/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-300 w-[78%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="text-green-400/70 text-sm mb-2">
              Scroll to explore
            </span>
            <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen h-screen w-full flex flex-col items-center justify-center py-12 z-10 relative snap-start snap-always">
        <svg
          width="100%"
          height="40"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-4 left-0 right-0"
        >
          <defs>
            <linearGradient
              id="electricGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#0a683f" />
              <stop offset="100%" stopColor="#014729" />
            </linearGradient>
          </defs>
          <polyline
            points="
    0,10
    2.5,4
    5,10
    7.5,2
    10,10
    12.5,6
    15,10
    17.5,3
    20,10
    22.5,7
    25,10
    27.5,5
    30,10
    32.5,2
    35,10
    37.5,8
    40,10
    42.5,4
    45,10
    47.5,6
    50,10
    52.5,5
    55,10
    57.5,3
    60,10
    62.5,7
    65,10
    67.5,4
    70,10
    72.5,2
    75,10
    77.5,8
    80,10
    82.5,6
    85,10
    87.5,3
    90,10
    92.5,5
    95,10
    97.5,7
    100,10"
            stroke="url(#electricGradient)"
            fill="transparent"
            strokeWidth="1"
          />
        </svg>

        <div className="w-full max-w-5xl mx-auto relative animate-slideUp mb-16 mt-32 md:mt-0 px-2 md:px-0">
          <form onSubmit={handleSubmit} className="relative">
            <Input
              className="w-full py-6 md:py-8 px-4 md:px-6 text-base rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm focus-visible:ring-green-500"
              placeholder="Message Lumin or @mention agent"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <Send />
            </Button>
          </form>

          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <Button variant="outline" size="sm" className="gap-1">
              <Search className="h-4 w-4" />
              Web Search
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Smartphone className="h-4 w-4" />
              App Builder
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Clock size={20} />
              Deep Research
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Zap className="h-4 w-4" />
              Think
            </Button>

            <Button variant="outline" size="sm" className="gap-1">
              <Image className="h-4 w-4" />
              Image Gen
            </Button>

            <Button variant="outline" size="sm" className="gap-1">
              <Upload className="h-4 w-4" />
              Upload
            </Button>

            <Button variant="outline" size="sm" className="gap-1">
              <Figma className="h-4 w-4" />
              Figma
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6">
            <Button
              variant="outline"
              size="sm"
              className="justify-start gap-2 h-auto py-2"
            >
              <Clock size={20} className="text-blue-500" />
              Lumin-Ultra
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="justify-start gap-2 h-auto py-2"
            >
              <Clock size={20} className="text-purple-500" />
              Lumin-Pro
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="justify-start gap-2 h-auto py-2"
            >
              <Clock size={20} className="text-yellow-500" />
              Lumin-Hyper
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="justify-start gap-2 h-auto py-2"
            >
              <Clock size={20} className="text-green-500" />
              Lumin-Adapt
            </Button>
          </div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              The first 1,000 holders receive 6 months of free access to our
              most advanced model.
            </p>
            <Link
              href="https://forms.gle/4zPX2XKZktcntBVVA"
              className="mt-4 inline-block px-6 py-3 rounded-md bg-green-500 hover:bg-green-400 text-sm font-medium transition-colors duration-300 text-black"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
