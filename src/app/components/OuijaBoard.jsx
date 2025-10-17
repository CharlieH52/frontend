import styles from "../styles/OuijaBoard.module.css";

export default function OuijaBoard() {
    return (
        <div className={styles.OuijaBoard}>
            <img className={styles.OuijaBoard__Background} src="" alt="" />
            <span className={`${styles.OuijaBoard__Character} ${styles['OuijaBoard__Character--Bye']}`}>good bye</span>
        </div>
    );
}   