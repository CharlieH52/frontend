"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/WelcomeScreen.module.css';
import Image from 'next/image';
import SmokeEffect from './SmokeEffect';
import RainEffect from './RainEffect';
import EvilEyes from './EvilEyes';

const DEMON_FACE_URL = "/assets/images/demon-face.png";
const IMAGE_DEVATHON = "/assets/images/devathon-edition.svg";

export default function WelcomeScreen() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [flash, setFlash] = useState(false);
  const router = useRouter();

  const handleStart = () => setShowInstructions(true);
  const handleUnderstood = () => router.push("/ouija");

  useEffect(() => {
    const interval = setInterval(() => {
      setFlash(true);
      setTimeout(() => setFlash(false), 300);
    }, 6000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.WelcomeScreenContainer}>
      <SmokeEffect isLightEnabled={true} />
      <RainEffect />
      <RainEffect />

      <Image
        src={DEMON_FACE_URL}
        alt="Demon Face"
        className={`${styles.DemonFace} ${flash ? styles.flash : ''}`}
        width={1920}
        height={1080}
        priority
      />
      <Image
        src={IMAGE_DEVATHON}
        alt="Devathon Logo"
        className={styles.DevathonLogo}
        width={1920}
        height={1080}
      />
      <EvilEyes flash={flash} />

      {!showInstructions ? (
        <button className={styles.startButton} onClick={handleStart}>
          Iniciar Ritual
        </button>
      ) : (
        <div className={styles.instructionsBox}>
          <h2>Invocación al Espíritu</h2>
          <p>
            En este juego contactarás a una entidad más allá del velo.
            Responde solo lo necesario. Nunca rompas el círculo.
            Prepárate para lo que venga...
          </p>
          <button className={styles.buttonOk} onClick={handleUnderstood}>Entendido</button>
        </div>
      )}
    </div>
  );
}
