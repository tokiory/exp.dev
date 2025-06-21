"use client";
import { useEffect, useRef } from "react";

type Sparkle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  fadeIn: boolean;
  baseX: number; // центр своей ячейки (ограничение движения)
  baseY: number;
  cellWidth: number;
  cellHeight: number;
};

const SparkleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparklesRef = useRef<Sparkle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const gridX = 10;
  const gridY = 6;

  const centerExclusionRadiusX = 150;
  const centerExclusionRadiusY = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = "https://api.iconify.design/fluent-emoji-flat:sparkles.svg";

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function createSparkles(): Sparkle[] {
      const sparkles: Sparkle[] = [];
      const cellWidth = width / gridX;
      const cellHeight = height / gridY;

      const centerX = width / 2;
      const centerY = height / 2;

      for (let i = 0; i < gridX; i++) {
        for (let j = 0; j < gridY; j++) {
          const x = i * cellWidth + Math.random() * cellWidth;
          const y = j * cellHeight + Math.random() * cellHeight;

          const inCenterX = Math.abs(x - centerX) < centerExclusionRadiusX;
          const inCenterY = Math.abs(y - centerY) < centerExclusionRadiusY;
          if (inCenterX && inCenterY) {
            continue;
          }

          sparkles.push({
            x,
            y,
            vx: (Math.random() - 0.5) * 0.1,
            vy: (Math.random() - 0.5) * 0.1,
            size: Math.random() * 16 + 12,
            opacity: 0,
            fadeIn: true,
            baseX: i * cellWidth + cellWidth / 2,
            baseY: j * cellHeight + cellHeight / 2,
            cellWidth,
            cellHeight,
          });
        }
      }
      return sparkles;
    }

    sparklesRef.current = createSparkles();

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const s of sparklesRef.current) {
        if (s.fadeIn) {
          s.opacity += 0.02;
          if (s.opacity >= 1) {
            s.opacity = 1;
            s.fadeIn = false;
          }
        }

        s.x += s.vx;
        s.y += s.vy;

        s.vx += (Math.random() - 0.5) * 0.00003;
        s.vy += (Math.random() - 0.5) * 0.00003;

        s.vx = Math.max(Math.min(s.vx, 0.3), -0.3);
        s.vy = Math.max(Math.min(s.vy, 0.3), -0.3);

        const halfWidth = s.cellWidth / 2;
        const halfHeight = s.cellHeight / 2;

        if (s.x < s.baseX - halfWidth) {
          s.x = s.baseX - halfWidth;
          s.vx = Math.abs(s.vx);
        } else if (s.x > s.baseX + halfWidth) {
          s.x = s.baseX + halfWidth;
          s.vx = -Math.abs(s.vx);
        }

        if (s.y < s.baseY - halfHeight) {
          s.y = s.baseY - halfHeight;
          s.vy = Math.abs(s.vy);
        } else if (s.y > s.baseY + halfHeight) {
          s.y = s.baseY + halfHeight;
          s.vy = -Math.abs(s.vy);
        }

        ctx.globalAlpha = s.opacity;
        ctx.drawImage(image, s.x, s.y, s.size, s.size);
        ctx.globalAlpha = 1;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    image.onload = animate;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      sparklesRef.current = createSparkles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen -z-1 opacity-80 pointer-events-none"
      />
      <div
        style={{
          background:
            "radial-gradient(white 80px, transparent)",
        }}
        className="fixed top-0 left-0 w-screen h-screen -z-1"
      ></div>
    </>
  );
};

export default SparkleCanvas;
