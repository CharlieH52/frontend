import styles from "@/styles/NavMenu.module.css";
import Link from "next/link";

export default function NavMenu() {
    return(
        <header className={styles.NavMenu}>
            <div>
                <h1 className={styles.NavMenu__Title}>Devathon X</h1>
            </div>
            <Link className={styles.NavMenu__StartButton} href="/ouija" replace>Jugar</Link>
            <nav className={styles.NavMenu__Nav}>
                <Link href="/credits" replace>Créditos</Link>
            </nav>
        </header>
    );
}