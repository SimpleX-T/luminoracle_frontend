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
  Image,
  Search,
  Send,
  Smartphone,
  Upload,
  Zap,
} from "lucide-react";

import { Terminal } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

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
        className="relative min-h-screen flex items-center pt-20 select-none"
        id="hero"
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
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

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
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
                      LUMIN INTERFACE
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        ref={promptRef}
                        type="text"
                        className="w-full px-4 py-3 bg-black/60 border border-green-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/50 text-white placeholder-gray-500 pr-32 select-none"
                        placeholder="Ask Lumin anything..."
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        disabled
                      />
                      <div className="absolute right-2 top-2 px-3 py-1 bg-black/80 border border-green-500/30 rounded text-xs text-green-400 font-mono">
                        LOCKED TILL Q4
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

                    <div className="pt-4 border-t border-green-900/50">
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

      <section className="container min-h-screen flex flex-col items-center justify-center py-12 z-10">
        <div className="w-full max-w-3xl mx-auto relative animate-slideUp mb-16">
          <form onSubmit={handleSubmit} className="relative">
            <Input
              className="w-full py-6 px-4 text-base rounded-lg border border-border/50 bg-background/80 backdrop-blur-sm focus-visible:ring-green-500 "
              placeholder="Message Lumin or @mention agent"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 disabled:cursor-not-allowed disabled:bg-green-500/30 hover:bg-green-600 text-white rounded-full"
              aria-label="Send message"
              disabled={!inputValue.trim()}
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
              <Clock className="h-4 w-4" />
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
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
