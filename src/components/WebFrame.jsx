import styles from "@/styles/WebFrame.module.css";

export default function SideFrame() {
    return (
        <aside className={styles.UserInput}>
            <div>
                <img src="" alt="" />
            </div>
                <section>
                    <span className={styles.UserInput__Response}>
                        <p>Respuesta desde el mas alla...</p>
                    </span>
                    <div className={styles.UserInput__Controls}>
                        <input className={styles.UserInput__Input} type="text" placeholder="Try to ask something..." />
                        <button className={styles.UserInput__InputSubmit} type="button">Send</button>
                    </div>
                </section>
            <nav>
                <a href="">CodexBarba</a>
                <a href="">Link</a>
                <a href="">Link</a>
                <a href="">Link</a>
            </nav>
        </aside>
    );
}