"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/EvilEyes.module.css";

const MAX_MOVE = 10;
const BLINK_DURATION = 150;

export default function EvilEyes({ flash }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [blinking, setBlinking] = useState(false);
  const eyeRef1 = useRef(null);
  const eyeRef2 = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (flash) {
      setBlinking(true);
      setTimeout(() => setBlinking(false), BLINK_DURATION);
    }
  }, [flash]);

  const calcTransform = (eyeRef) => {
    if (!eyeRef.current) return "";
    const rect = eyeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = pos.x - centerX;
    const dy = pos.y - centerY;
    const distance = Math.min(Math.sqrt(dx * dx + dy * dy), MAX_MOVE);
    const angle = Math.atan2(dy, dx);

    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;

    return `translate(${offsetX}px, ${offsetY}px)`;
  };

  return (
    <div className={styles.eyesContainer}>
      {[eyeRef1, eyeRef2].map((ref, i) => (
        <div
          key={i}
          ref={ref}
          className={`${styles.eye} ${blinking ? styles.blink : ""} ${flash ? styles.flash : ""}`}
        >
          <div
            className={styles.pupil}
            style={{ transform: calcTransform(ref) }}
          ></div>
        </div>
      ))}
    </div>
  );
}
