import styles from "@/styles/MobileFrame.module.css";

export default function InputFrame() {
    return (
        <section className={styles.UserInput}>
            <span className={styles.UserInput__Response}>
                <p>Respuesta desde el mas alla...</p>
            </span>
            <div className={styles.UserInput__Controls}>
                <input className={styles.UserInput__Input} type="text" placeholder="Try to ask something..." />
                <button className={styles.UserInput__InputSubmit} type="button">Send</button>
            </div>
        </section>
    );
}