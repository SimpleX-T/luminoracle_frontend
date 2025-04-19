import { useEffect, useRef, useState } from "react";
import StaticCard from "./static-card";

interface FlipUnitProps {
  digit: number;
  unit: "days" | "hours" | "minutes" | "seconds";
  label: string;
}

function usePrevious(value: number) {
  const ref = useRef<number | null>(null);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

const FlipUnit = ({ digit, unit, label }: FlipUnitProps) => {
  const [shuffle, setShuffle] = useState(true);
  const prevDigit = usePrevious(digit);

  // Update animation state when digit changes
  useEffect(() => {
    if (prevDigit !== undefined && prevDigit !== digit) {
      setShuffle(!shuffle);
    }
  }, [digit, prevDigit]);

  // Format current and previous digits
  let currentDigit = digit;
  let previousDigit = digit - 1;

  // Handle special cases for wraparound
  if (unit === "seconds" || unit === "minutes") {
    previousDigit = previousDigit === -1 ? 59 : previousDigit;
  } else if (unit === "hours") {
    previousDigit = previousDigit === -1 ? 23 : previousDigit;
  } else if (unit === "days") {
    previousDigit = previousDigit === -1 ? 30 : previousDigit; // Approximate
  }

  // Pad with leading zeros
  const currentDigitStr = String(currentDigit).padStart(2, "0");
  const previousDigitStr = String(previousDigit).padStart(2, "0");

  // Determine which digit to show in each animation
  const digit1 = shuffle ? previousDigitStr : currentDigitStr;
  const digit2 = !shuffle ? previousDigitStr : currentDigitStr;

  // Determine animation types
  const animation1 = shuffle ? "fold" : "unfold";
  const animation2 = !shuffle ? "fold" : "unfold";

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-20 bg-green-500/10 rounded-lg shadow-lg shadow-green-500/20 overflow-hidden">
        {/* Static Cards */}
        <StaticCard position="upper-card" digit={currentDigitStr} />
        <StaticCard position="lower-card" digit={previousDigitStr} />

        {/* Animated Cards */}
        <AnimatedCard digit={digit1} animation={animation1} />
        <AnimatedCard digit={digit2} animation={animation2} />
      </div>
      <span className="mt-2 text-xs text-muted-foreground uppercase font-medium">
        {label}
      </span>
    </div>
  );
};

export default FlipUnit;
