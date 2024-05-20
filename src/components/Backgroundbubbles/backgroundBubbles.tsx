"use client"

import React, { useEffect, useRef } from "react";

export function BackgroundBubbles () {
  const interactiveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;

      if (interactiveRef.current) {
        interactiveRef.current.style.backgroundPosition = `${curX}px ${curY}px`;
      }

      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX / 20;
      tgY = event.clientY / 20;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="interactive"
      ref={interactiveRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "url(/pruebas/fontgif.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        animation: "move 20s linear infinite",
      }}
    ></div>
  );
};

export default BackgroundBubbles;


