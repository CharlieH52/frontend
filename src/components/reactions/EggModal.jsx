"use client"
import React, {useRef, useEffect} from 'react';
import styles from '@/styles/EggModal.module.css';
import Image from 'next/image';
const racMu = '/music/pedro-pedro-pe.mp3';

export default function EggModal({onClose}) {
    const audio = useRef(null);
    
    useEffect(() => {
        audio.current = new Audio(racMu);
        
        audio.current.loop = true;
        audio.current.volume = 0.4;
        audio.current.currentTime = 1.2;
        audio.current.play();
        
        return () => {
            audio.current.pause();
            audio.current = null;
        };
    }, []);

    const handClose = () => {
        onClose?.();
    };

    return (
        <div className={styles.EggModal} onClick={handClose}>
            <div className={styles.EggModal__Mask}></div>
            <div className={styles.EggModal__PedroContainer}>
                <Image src={"/assets/images/pedro-racoon.svg"} width={480} height={480} className={styles.EggModal__Racoon} alt=''/>
            </div>
        </div>
    );
}
