import styles from '@/app/ouija/ouija.module.css';
import MobileFrame from '@/components/MobileFrame.jsx';
import SmokeEffect from '@/components/SmokeEffect';

export default function GameLayout({ children }) {
    return (
        <main className={styles.Ouija}>
            {/* <GlobalAudio /> */}
            <MobileFrame />
            <SmokeEffect />
            <div className={styles.Ouija__Container}>
                {children}
            </div>
        </main>
    );
}
