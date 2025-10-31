import styles from '@/styles/SmokeEffect.module.css';
import Image from 'next/image';

export default function SmokeEffect() {
    return (
        <div className={`${styles.Smoke__Container} ${styles['smoke-back']}`}>
            <div className={styles.Background}></div>
            <div className={styles.Smoke__Wraper}>
                <Image
                    src="/assets/images/smoke-texture.png"
                    alt="Smoke Texture"
                    className={`${styles.Smoke} ${styles['Smoke--Bg1']}`}
                    width={1920}
                    height={1080}
                />
            </div>
            <div className={styles.Smoke__Wraper}>
                <Image
                    src="/assets/images/smoke-texture.png"
                    alt="Smoke Texture"
                    className={`${styles.Smoke} ${styles['Smoke--Bg2']}`}
                    width={1920}
                    height={1080}
                />
            </div>
            <div className={`${styles.Smoke__Container} ${styles['smoke-front']}`}>
                <div className={styles.Smoke__Wraper}>
                <Image
                    src="/assets/images/smoke-texture.png"
                    alt="Smoke Texture"
                    className={`${styles.Smoke} ${styles['Smoke--Bg3']}`}
                    width={1920}
                    height={1080}
                />
                </div>
            </div>
            <div className={styles.Smoke__Mask}></div>
            <div className={styles.Smoke__CenterGradient}></div>
        </div>
    );
};