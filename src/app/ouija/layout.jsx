import styles from '@/app/ouija/ouija.module.css';
import ControlBar from '@/components/ControlBar';
import MobileFrame from '@/components/MobileFrame.jsx';
import EggModal from '@/components/reactions/EggModal';
import SmokeEffect from '@/components/SmokeEffect.jsx';

export default function GameLayout({ children }) {

    return (
        <main className={styles.Ouija}>
            <EggModal />
            <ControlBar home={true} credits={true} />
            <MobileFrame />
            <SmokeEffect />
            <div className={styles.Ouija__Container}>
                {children}
            </div>
        </main>
    );
}
