"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

interface RoadmapProps {
  onClose?: () => void;
}

export function Roadmap({ onClose }: RoadmapProps) {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const roadmapPhases = [
    {
      title: "Phase 1: Foundation",
      date: "Q1 2025",
      description:
        "Initial release of Lumin with hyper-adaptive reasoning capabilities and basic omni-task functionality.",
      features: [
        "Core reasoning engine deployment",
        "Text and image processing capabilities",
        "Basic autonomous learning framework",
        "Initial API access for developers",
      ],
    },
    {
      title: "Phase 2: Evolution",
      date: "Q2 2025",
      description:
        "Enhanced self-evolution capabilities and expanded knowledge integration systems.",
      features: [
        "Advanced self-improvement algorithms",
        "Expanded multimodal capabilities (audio, video)",
        "Real-time knowledge graph implementation",
        "Emotional intelligence framework",
      ],
    },
    {
      title: "Phase 3: Mastery",
      date: "Q3 2026",
      description:
        "Full omni-task mastery across all domains with unprecedented utility.",
      features: [
        "Complete domain-agnostic problem solving",
        "Advanced proactive assistance",
        "Fully autonomous evolution system",
        "Enterprise integration solutions",
      ],
    },
    {
      title: "Phase 4: Transcendence",
      date: "Q4 2026",
      description:
        "Lumin achieves full potential with revolutionary capabilities beyond current AI paradigms.",
      features: [
        "Revolutionary reasoning capabilities",
        "Seamless integration across all digital systems",
        "Unprecedented creative and analytical abilities",
        "Transformative impact across industries",
      ],
    },
  ];

  return (
    <div className="w-full min-h-[50vh] max-w-7xl mx-auto">
      {/* Futuristic Timeline */}
      <div className="relative mb-16">
        <div className="flex justify-between relative z-10 mb-4">
          {roadmapPhases.map((phase, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center cursor-pointer group transition-all duration-300 ${
                activePhase >= index
                  ? "scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActivePhase(index)}
              onMouseEnter={() => setHoveredPhase(index)}
              onMouseLeave={() => setHoveredPhase(null)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center z-10 transition-all duration-300 border-2 ${
                  activePhase >= index
                    ? "border-green-500 bg-green-500/20"
                    : "border-green-500/40 bg-background"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full transition-all duration-300 ${
                    activePhase >= index ? "bg-green-500" : "bg-green-500/40"
                  }`}
                ></div>
                {(activePhase >= index || hoveredPhase === index) && (
                  <div className="absolute -inset-2 rounded-full bg-green-500/10 animate-pulse"></div>
                )}
              </div>

              <div
                className={`absolute top-16 text-center transition-all duration-300 ${
                  activePhase >= index
                    ? "opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              >
                <p
                  className={`font-bold ${
                    activePhase >= index
                      ? "text-green-500"
                      : "text-muted-foreground"
                  }`}
                >
                  {phase.date}
                </p>
              </div>

              {/* Vertical line connecting to content */}
              <div
                className={`absolute h-12 w-0.5 top-16 bg-gradient-to-b from-green-500/80 to-green-500/0 ${
                  activePhase >= index ? "opacity-100" : "opacity-40"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Content */}
      <Card className="p-6 border border-green-500/30 bg-background/60 backdrop-blur-md relative overflow-hidden">
        {/* Decorative elements */}
        {/* <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/5 rounded-full blur-3xl"></div> */}

        {/* Tech grid pattern */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 z-0 opacity-20">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-green-500/10"></div>
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="text-2xl font-bold">
              {roadmapPhases[activePhase].title}
            </h3>
          </div>

          <p className="text-muted-foreground mb-6 max-w-3xl">
            {roadmapPhases[activePhase].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmapPhases[activePhase].features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="w-6 h-6 rounded-md bg-green-500/20 flex items-center justify-center mt-0.5 flex-shrink-0 border border-green-500/30 group-hover:bg-green-500/30 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div>
                  <p className="font-medium group-hover:text-green-500 transition-colors duration-300">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-8 pt-4 border-t border-green-500/20">
            <Button
              variant="outline"
              onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
              disabled={activePhase === 0}
              className="border-green-500/30 hover:bg-green-500/10 group"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M19 12H5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 19L5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous Phase
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                setActivePhase(
                  Math.min(roadmapPhases.length - 1, activePhase + 1)
                )
              }
              disabled={activePhase === roadmapPhases.length - 1}
              className="border-green-500/30 hover:bg-green-500/10 group"
            >
              Next Phase
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

// Missing Button component import
import { Button } from "@/components/ui/button";
