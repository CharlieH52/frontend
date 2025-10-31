import GlobalAudio from '@/components/GlobalAudio';
import styles from '@/styles/ControlBar.module.css';
import HomeButton from '@/components/buttons/HomeButton';
import CreditsButton from '@/components/buttons/CreditsButton';

export default function ControlBar({home, credits}) {
    return (
        <div className={styles.ControlBar}>
            <HomeButton ActiveHome={home} />
            <CreditsButton ActiveCredits={credits} />
            <GlobalAudio />
        </div>
    )
}