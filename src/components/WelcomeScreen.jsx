'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/WelcomeScreen.module.css';
import SunCorner from '@/components/corners/SunCorner';
import RightStarCorner from '@/components/corners/RightStarCorner';
import MoonCorner from '@/components/corners/MoonCorner';
import LeftStarCorner from '@/components/corners/LeftStarCorner';
import Image from 'next/image';
import SmokeEffect from './SmokeEffect';
import PlanchetteWelcome from './PlanchetteWelcome';
import Link from 'next/link';
import ControlBar from './ControlBar';

const DEMON_FACE = '/assets/images/demon-face.png';

export default function WelcomeScreen() {
    const [flash, setFlash] = useState(false);

    useEffect(() => {
        const interval = setInterval(
            () => {
                setFlash(true);
                setTimeout(() => setFlash(false), 300);
            },
            6000 + Math.random() * 4000
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.WelcomeScreenContainer}>
                <div className={styles.Background}></div>
                <div className={styles.PresentationContainer}>
                    <SunCorner />
                    <RightStarCorner />
                    <MoonCorner />
                    <LeftStarCorner />
                </div>
                <div className={styles.Welcome__Container}>
                    <h1 className={styles.title}>Ouija Virtual</h1>
                    <h2 className={styles.subtitle}>Devathon X</h2>
                    <PlanchetteWelcome />
                    <ol className={styles.instructionsList}>
                        <li>Cierra la puerta</li>
                        <li>Apaga la luz</li>
                        <li>Respira hondo</li>
                        <li>Piensa en una pregunta para el más allá</li>
                        <li>Empieza con tu invocación</li>
                        <li>Hagas lo que hagas no llames a Pedro</li>
                    </ol>
                    <Link className={styles.nextButton} href="/ouija">
                        Adelante
                    </Link>
                </div>
                <Image
                    src={DEMON_FACE}
                    alt="Demon Face"
                    className={`${styles.DemonFace} ${flash ? styles.flash : ''}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <ControlBar home={false} credits={true}/>
            <SmokeEffect />
        </>
    );
}
