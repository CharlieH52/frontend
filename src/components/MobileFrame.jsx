import styles from "@/styles/MobileFrame.module.css";
import InputSection from "./InputSection";

export default function MobileFrame() {
    return (
        <div className={styles.MobileFrame}>
            <div className={styles.MobileFrame__Tab}>
                <div className="TabLines__Default TabLines__Default--Horizontal"></div>
                <div className="TabLines__Default TabLines__Default--Horizontal"></div>
                <div className="TabLines__Default TabLines__Default--Horizontal"></div>
            </div>
            <InputSection />
        </div>
    );
}