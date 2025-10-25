"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "@/styles/EvilEyes.module.css";

const calculateRotation = (eyeRef, mouseX, mouseY) => {
    if (!eyeRef.current) return 0;

    const eyeRect = eyeRef.current.getBoundingClientRect();
    const centerX = eyeRect.left + eyeRect.width / 2;
    const centerY = eyeRect.top + eyeRect.height / 2;

    const dy = mouseY - centerY;
    const dx = mouseX - centerX;

    const angleRad = Math.atan2(dy, dx); 
    
    return angleRad * (180 / Math.PI) + 90; 
};


export default function EvilEyes() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const eyeRef1 = useRef(null); 
    const eyeRef2 = useRef(null);
    
    useEffect(() => {
        const handleMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);
    
    const rotation1 = calculateRotation(eyeRef1, pos.x, pos.y);
    const rotation2 = calculateRotation(eyeRef2, pos.x, pos.y);

    return (
        <div className={styles.eyesContainer}>
            
            <div ref={eyeRef1} className={styles.eye}> 
                <div
                    className={styles.pupil}
                    style={{ transform: `rotate(${rotation1}deg) translateY(-10px)` }} 
                ></div>
            </div>
        
            <div ref={eyeRef2} className={styles.eye}>
                <div
                    className={styles.pupil}
                    style={{ transform: `rotate(${rotation2}deg) translateY(-10px)` }}
                ></div>
            </div>
        </div>
    );
}