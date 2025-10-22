import styles from "@/styles/WebFrame.module.css";
import InputSection from "./InputSection";
import IconLink from "./IconLink";

export default function WebFrame() {
    return (
        <aside className={styles.WebFrame}>
            <div className={styles.WebFrame__Tab}>
                <div className="TabLines__Default TabLines__Default--Vertical"></div>
                <div className="TabLines__Default TabLines__Default--Vertical"></div>
                <div className="TabLines__Default TabLines__Default--Vertical"></div>
            </div>
            <div className={styles.WebFrame__Logo}>
                <img className={styles.WebFrame__LogoImage} src="" alt="" />
            </div>
            <InputSection />
            <nav className={styles.WebFrame__Layout}>
                <IconLink img_src="/assets/icons/PEE_logo.png" img_alt="Programación en Español" url="https://programacion-es.dev/" />
            </nav>
        </aside>
    );
}