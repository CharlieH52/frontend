import styles from "@/styles/InputSection.module.css";

export default function InputSection() {
    return (
        <section className={styles.UserInput}>
            <input className={styles.UserInput__Input} type="text" placeholder="Intenta preguntar algo..." />
            <button className={styles.UserInput__InputSubmit} type="button">Enviar</button>
        </section>
    );
}