"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
const spookyMusic = '/music/tilitilibom.mp3';
import styles from "@/styles/GlobalAudio.module.css";

// CAREFUL: Dont use em units for these elements, it may cause a slight jump during HOVER
const VolumeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="currentColor" d="M9 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m8 0h-2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>; 
const MuteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4v16a1 1 0 0 0 1.524.852l13-8a1 1 0 0 0 0-1.704l-13-8A1 1 0 0 0 6 4"/></svg>;

const GlobalAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef(null);
    
    useEffect(() => {
        audio.current = new Audio(spookyMusic); 

        audio.current.loop = true;
        audio.current.volume = 0.2;
        audio.current.currentTime = 8;
        
        return() => {
            audio.current.pause();
            audio.current = null;
        };
    }, []);

    const toggleAudio = useCallback(() => {
        if (!audio.current) return;

        if (isPlaying) {
            audio.current.pause();
        } else {
            audio.current.play().catch(error => {
                console.error("Error al intentar reproducir audio:", error);
            });
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    return (
        <div className={styles.AudioControl}>
            <span className={styles.AudioControl__Icon}
                onClick={toggleAudio}
                title={isPlaying ? "Silenciar" : "Activar Audio"}
            >
                {isPlaying ? <VolumeIcon /> : <MuteIcon />}
            </span>
        </div>
    );
};

export default GlobalAudio;