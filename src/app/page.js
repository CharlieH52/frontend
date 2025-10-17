import styles from "./page.module.css";

export default function Home() {
	console.log({ styles });
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Devathon X</h1>
			<h2 className={styles.subtitle}>Equipo 3</h2>
			<h2 className={styles.subtitle}>Ouija Virtual</h2>
		</div>
	);
}
