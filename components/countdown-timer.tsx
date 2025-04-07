"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface CountdownTimerProps {
  onClose: () => void
  targetDate: string
}

export function CountdownTimer({ onClose, targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Animation timing
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Card
        className={`relative w-full max-w-md p-6 bg-background/95 backdrop-blur-md border border-green-500/30 shadow-lg shadow-green-500/10 transition-all duration-500 ${isVisible ? "scale-100" : "scale-95"}`}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Lumin is Coming Soon
          </h2>
          <p className="text-muted-foreground mt-2">
            Our hyper-adaptive AI is still evolving. Join the waitlist to be among the first to experience Lumin.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="countdown-item flex flex-col items-center">
                <div className="relative">
                  <div className="w-full h-16 flex items-center justify-center bg-green-500/10 rounded-md border border-green-500/20 text-2xl font-mono font-bold">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div
                    className="absolute -inset-px rounded-md bg-gradient-to-r from-green-500/20 to-emerald-500/20 animate-pulse pointer-events-none opacity-70"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                  <div className="countdown-pulse"></div>
                </div>
                <span className="text-xs text-muted-foreground mt-1">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-600 hover:to-emerald-800 text-white">
            Join the Waitlist
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            Be the first to experience the future of AI with unprecedented utility and autonomous evolution.
          </p>
        </div>
      </Card>
    </div>
  )
}

