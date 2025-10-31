"use client";
import React, { useEffect, useRef } from "react";
import styles from "@/styles/RainEffect.module.css";

export default function RainEffect() {
    const audioRef = useRef(null);

  useEffect(() => {
    //Rain container
    const container = document.createElement("div");
    container.classList.add(styles.rainContainer);
    document.body.appendChild(container);
    //drop
    for (let i = 0; i < 100; i++) {
      const drop = document.createElement("div");
      drop.classList.add(styles.drop);
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDuration = `${0.5 + Math.random() * 0.7}s`;
      drop.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(drop);
    }

     const lightningInterval = setInterval(() => {
        const lightning = document.querySelector(`.${styles.lightning}`);
        if (lightning) {
          lightning.classList.add(styles.flash);
          if (audioRef.current) {
            setTimeout(() => {
              audioRef.current.currentTime = 0;
              audioRef.current.play().catch(() => {});
            }, 500 + Math.random() * 1000);
          }
          setTimeout(() => lightning.classList.remove(styles.flash), 300);
        }
      }, 8000 + Math.random() * 4000);
  
      return () => {
        clearInterval(lightningInterval);
        container.remove();
      };
    }, []);
  
    return (
      <>
        <div className={styles.lightning}></div>
        <audio ref={audioRef} src="/music/thunder.mp3" preload="auto"></audio>
      </>
    );
  }
