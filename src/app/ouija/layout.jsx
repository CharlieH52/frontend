import styles from '@/app/ouija/ouija.module.css';
import ControlBar from '@/components/ControlBar';
import MobileFrame from '@/components/MobileFrame.jsx';
import SmokeEffect from '@/components/SmokeEffect.jsx';
import GlobalAudio from '@/components/GlobalAudio.jsx';

export default function GameLayout({ children }) {

    return (
        <main className={styles.Ouija}>
            <ControlBar />
            <MobileFrame />
            <SmokeEffect />
            <div className={styles.Ouija__Container}>
                {children}
            </div>
        </main>
    );
}
