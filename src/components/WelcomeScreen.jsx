"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/styles/WelcomeScreen.module.css';
import OuijaBoard from './OuijaBoard';
import Image from 'next/image';
import SmokeEffect from './SmokeEffect';

const DEMON_FACE = "/assets/images/demon-face.png";
const FISSURE_TEXTURE = "/assets/images/fissure-texture.png"

export default function WelcomeScreen() {
  const [flash, setFlash] = useState(false);
  const router = useRouter();

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
      <OuijaBoard
        showAlphabetSeparator={false}
        showNumbers={false}
        showYesNo={false}
        showAdios={false}
        showSeparator={false}
      />
      <Image
        src={FISSURE_TEXTURE}
        alt="fissure texture"
        className={styles.fissureTexture}
        width={1920}
        height={1080}
        priority
        loading="eager"
        unoptimized
      />
      <div className={styles.textOverlay}>
        <h1 className={styles.title}>Ouija Virtual</h1>
        <h2 className={styles.subtitle}>Devathon X</h2>

        <div className={styles.planchette}>
          <div className={styles.number}>3</div>
          <span className={styles.teamLabel}>Equipo</span>
        </div>

        <ol className={styles.instructionsList}>
          <li>Cierra la puerta</li>
          <li>Apaga la luz</li>
          <li>Respira hondo</li>
          <li>Piensa en una pregunta para el más allá</li>
          <li>Empieza con tu invocación</li>
          <li>Hagas lo que hagas no llames a Pedro</li>
        </ol>

        <button className={styles.nextButton} onClick={handleUnderstood}>Adelante</button>
      </div>


      <SmokeEffect isLightEnabled={true} />
      <Image
        src={DEMON_FACE}
        alt="Demon Face"
        className={`${styles.DemonFace} ${flash ? styles.flash : ''}`}
        width={1920}
        height={1080}
        priority
      />

    </div>
  );
}
