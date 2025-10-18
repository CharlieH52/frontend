import styles from "@/styles/OuijaBoard.module.css";

export default function OuijaBoard() {
    return (
        <div className={styles.OuijaBoard}>
            <img className={styles.OuijaBoard__Background} src="https://img.pikbest.com/wp/202344/antique-paper-texture-ancient-parchment-vintage-background-with_9931513.jpg!w700wp" alt="" />
            <div className={styles.OuijaBoard__CornersLayout}>
                <img className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--TopLeft']}`} src="" alt="" />
                <img className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--TopRight']}`} src="" alt="" />
                <img className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--BotLeft']}`} src="" alt="" />
                <img className={`${styles.OuijaBoard__Corner} ${styles['OuijaBoard__Corner--BotRight']}`} src="" alt="" />
            </div>
            <div className={styles.OuijaBoard__Logo}>
                <img src="" alt="" />
            </div>
            <div>
                <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Bye']}`}>Adios</span>
                <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Yes']}`}>Si</span>
                <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--No']}`}>No</span>
                <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Letter']}`}>A</span>
            </div>
        </div>
    );
}   