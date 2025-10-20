import styles from "@/styles/InputSection.module.css";

export default function InputSection() {
    return (
        <section className={styles.UserInput}>
            <span className={styles.UserInput__Response}>
                <p>Respuesta desde el mas alla...</p>
            </span>
            <div className={styles.UserInput__Controls}>
                <input className={styles.UserInput__Input} type="text" placeholder="Intenta preguntar algo..." />
                <button className={styles.UserInput__InputSubmit} type="button">Enviar</button>
            </div>
        </section>
    );
}