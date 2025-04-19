"use client";

import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface AnimatedCardProps {
  digit: string | number;
  animation: "fold" | "unfold";
}

const AnimatedCard = ({ digit, animation }: AnimatedCardProps) => {
  return (
    <div className={`flip-card ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

interface CountdownTimerProps {
  onClose: () => void;
  targetDate: string;
}

export function CountdownTimer({ onClose, targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  // Handle modal visibility animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Countdown logic
  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Handle Esc key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
        setTimeout(onClose, 300);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="countdown-title"
    >
      <div
        className={`relative w-full max-w-md p-6 bg-background/95 backdrop-blur-md border border-green-500/30 shadow-lg shadow-green-500/10 transition-all duration-500 ${
          isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
        }`}
      >
        <button
          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          aria-label="Close countdown timer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="text-center mb-6">
          <h2
            id="countdown-title"
            className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
          >
            Lumin is Coming Soon
          </h2>
          <p className="text-muted-foreground mt-2 text-sm sm:text-base">
            Our hyper-adaptive AI is still evolving. Join the waitlist to be
            among the first to experience Lumin.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 mb-6">
          <FlipUnit digit={timeLeft.days} unit="days" label="Days" />
          <FlipUnit digit={timeLeft.hours} unit="hours" label="Hours" />
          <FlipUnit digit={timeLeft.minutes} unit="minutes" label="Minutes" />
          <FlipUnit digit={timeLeft.seconds} unit="seconds" label="Seconds" />
        </div>

        <div className="space-y-4">
          <a
            href="https://forms.gle/4zPX2XKZktcntBVVA"
            className="mt-4 w-40 text-center mx-auto block px-6 py-3 rounded-md bg-green-500 hover:bg-green-400 text-sm font-medium transition-colors duration-300 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Join the waitlist
          </a>
          <p className="text-xs text-center text-muted-foreground">
            Be the first to experience the future of AI with hyper-adaptive
            reasoning and autonomous evolution.
          </p>
        </div>
      </div>
    </div>
  );
}
