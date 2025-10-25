"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/WelcomeScreen.module.css';
import Image from 'next/image';
import SmokeEffect from './SmokeEffect';
import RainEffect from './RainEffect';
import EvilEyes from './EvilEyes';

const EDIFICE_IMAGE_URL = "/assets/images/edifice-spooky.png"; 

export default function WelcomeScreen() { 
  const [showInstructions, setShowInstructions] = useState(false);
  const router = useRouter();

  const handleStart = () => setShowInstructions(true);
  const handleUnderstood = () => router.push("/ouija");

  return (
    <div className={styles.WelcomeScreenContainer}>
      <SmokeEffect />
      <RainEffect />
      <EvilEyes />
      <Image
        src={EDIFICE_IMAGE_URL}
        alt="Edificio Spooky"
        className={styles.Edifice}
        width={1920}
        height={1080}
      />

      {!showInstructions ? (
        <button className={styles.startButton} onClick={handleStart}>
          Iniciar
        </button>
      ) : (
        <div className={styles.instructionsBox}>
          <h2>Instrucciones</h2>
          <p>
            Cierra los ojos pronto,alguien camina por la ventana.
            <br />
            Escucha atentamente los sonidos de la noche...
            <br />
            Si continuas, abrirás portales a lugares desconocidos...
          </p>
          <button onClick={handleUnderstood}>Entendido</button>
        </div>
      )}
    </div>
  );
}
