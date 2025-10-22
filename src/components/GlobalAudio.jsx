"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
const spookyMusic = '/music/tilitilibom.mp3';
import styles from "@/styles/GlobalAudio.module.css";

const VolumeIcon = () => '🔊'; 
const MuteIcon = () => '🔇';

const GlobalAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef(null);
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            audio.current = new Audio(spookyMusic); 
        }
        audio.loop = true;
        audio.volume = 0.2;
    }, []);

    const toggleAudio = useCallback(() => {
        const audio = audioRef.current;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play().catch(error => {
                console.error("Error al intentar reproducir audio:", error);
            });
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    return (
        <button 
            className={styles.AudioControl} 
            onClick={toggleAudio}
            title={isPlaying ? "Silenciar" : "Activar Audio"}
        >
            {isPlaying ? <VolumeIcon /> : <MuteIcon />}
        </button>
    );
};

export default GlobalAudio;