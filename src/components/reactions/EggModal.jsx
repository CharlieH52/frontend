"use client"
import React, {useRef, useEffect} from 'react';
import styles from '@/styles/EggModal.module.css';
import Image from 'next/image';
const racMu = '/music/pedro-pedro-pe.mp3';
import useAppStore from '@/store/useAppStore';

export default function EggModal() {
    const audio = useRef(null);
    const modal = useAppStore((state) => state.modal);
    const changeModal = useAppStore((state) => state.changeModal);
    
    useEffect(() => {
        audio.current = new Audio(racMu);
        audio.current.loop = true;
        audio.current.volume = 0.4;
        audio.current.currentTime = 1.2;
        audio.current.play();
        return () => {
            audio.current?.pause();
        };
    }, [modal, audio]);

    return (
        modal && (
            <>
                <div className={styles.EggModal__Screen} onClick={() => changeModal()}></div>
                <div className={styles.EggModal} onClick={() => changeModal()}>
                    <div className={styles.EggModal__Mask}></div>
                    <div className={styles.EggModal__PedroContainer}>
                        <Image src={"/assets/images/pedro-racoon.svg"} width={480} height={480} className={styles.EggModal__Racoon} alt=''/>
                    </div>
                </div>
            </>
        )
    );
}
