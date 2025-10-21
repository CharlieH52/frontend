import styles from "@/styles/OuijaBoard.module.css";
import Image from "next/image";

export default function OuijaBoard() {
    return (
        <div className={styles.OuijaBoard}>
            <Image className={styles.OuijaBoard__Background} src="https://img.pikbest.com/wp/202344/antique-paper-texture-ancient-parchment-vintage-background-with_9931513.jpg!w700wp" alt="" />
            <div className={styles.OuijaBoard__CornerLayout}>
                <Image className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--TopLeft']}`} src="" alt="" />
                <Image className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--BotLeft']}`} src="" alt="" />
                <Image className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--TopRight']}`} src="" alt="" />
                <Image className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--BotRight']}`} src="" alt="" />
            </div>
            <div className={styles.OuijaBoard__Layout}>
                <div className={styles.OuijaBoard__LayoutHeader}>
                    <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Yes']}`}>Si</span>
                        <span className={styles.OuijaBoard__Response}>
                            <p className={styles.OuijaBoard__ResponseText}>Respuesta desde el mas alla...</p>
                        </span>
                    <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--No']}`}>No</span>
                </div>
                <div className={styles.OuijaBoard__LayoutMain}>
                    <div className={styles.OuijaBoard__Line}>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>A</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>B</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>C</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>D</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>E</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>F</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>G</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>H</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>I</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>J</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>K</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>L</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>M</span>
                    </div>
                    <div className={styles.OuijaBoard__Line}>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>N</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>O</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>P</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>Q</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>R</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>S</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>T</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>U</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>V</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>W</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>X</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>Y</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>Z</span>
                    </div>
                </div>
                <div className={styles.OuijaBoard__LayoutFooter}>
                    <div className={styles.OuijaBoard__Numbers}>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>1</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>2</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>3</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>4</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>5</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>6</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>7</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>8</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>9</span>
                        <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Number']}`}>0</span>
                    </div>
                    <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Bye']}`}>Adios</span>
                </div>
            </div>
        </div>
    );
}   