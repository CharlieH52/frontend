import styles from "@/app/ouija/ouija.module.css";
import Link from "next/link";
import GlobalAudio from "@/components/GlobalAudio";
import MobileFrame from "@/components/MobileFrame";
import SmokeEffect from "@/components/SmokeEffect";
import OuijaBoard from "@/components/OuijaBoard";

export default function Ouija() {
    return(
        <main className={styles.Ouija}>
            <GlobalAudio />
            <MobileFrame />
            <SmokeEffect />
            <Link className={styles.Ouija__HomeButton} href="/">Regresar</Link> 
            <div className={styles.Ouija__Container}>
                <OuijaBoard />
            </div>
        </main>
    );
}