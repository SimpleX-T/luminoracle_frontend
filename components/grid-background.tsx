"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const getGridColor = () => {
      const isDark =
        theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
      const isMid = theme === "mid"

      if (isDark) {
        return "rgba(52, 211, 153, 0.07)"
      } else if (isMid) {
        return "rgba(16, 185, 129, 0.05)"
      } else {
        return "rgba(5, 150, 105, 0.03)"
      }
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gridSize = 40
      const lineWidth = 0.5

      ctx.strokeStyle = getGridColor()
      ctx.lineWidth = lineWidth

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw animated accent lines
      const accentColor =
        theme === "dark"
          ? "rgba(52, 211, 153, 0.15)"
          : theme === "mid"
            ? "rgba(16, 185, 129, 0.1)"
            : "rgba(5, 150, 105, 0.07)"

      ctx.strokeStyle = accentColor
      ctx.lineWidth = 1

      // Horizontal accent line
      const yPos = (Math.sin(time * 0.2) * 0.5 + 0.5) * canvas.height
      ctx.beginPath()
      ctx.moveTo(0, yPos)
      ctx.lineTo(canvas.width, yPos)
      ctx.stroke()

      // Vertical accent line
      const xPos = (Math.cos(time * 0.15) * 0.5 + 0.5) * canvas.width
      ctx.beginPath()
      ctx.moveTo(xPos, 0)
      ctx.lineTo(xPos, canvas.height)
      ctx.stroke()

      // Draw glowing intersection
      ctx.fillStyle =
        theme === "dark"
          ? "rgba(52, 211, 153, 0.3)"
          : theme === "mid"
            ? "rgba(16, 185, 129, 0.2)"
            : "rgba(5, 150, 105, 0.15)"

      ctx.beginPath()
      ctx.arc(xPos, yPos, 4, 0, Math.PI * 2)
      ctx.fill()

      // Add glow effect
      const gradient = ctx.createRadialGradient(xPos, yPos, 0, xPos, yPos, 30)
      gradient.addColorStop(
        0,
        theme === "dark"
          ? "rgba(52, 211, 153, 0.4)"
          : theme === "mid"
            ? "rgba(16, 185, 129, 0.3)"
            : "rgba(5, 150, 105, 0.2)",
      )
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(xPos, yPos, 30, 0, Math.PI * 2)
      ctx.fill()

      time += 0.01
      animationFrameId = requestAnimationFrame(drawGrid)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
}

