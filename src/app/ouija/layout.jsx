import styles from '@/app/ouija/ouija.module.css';
import ControlBar from '@/components/ControlBar';
import MobileFrame from '@/components/MobileFrame.jsx';
import SmokeEffect from '@/components/SmokeEffect';

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
