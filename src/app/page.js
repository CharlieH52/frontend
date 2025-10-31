import styles from "./page.module.css";
import NavMenu from "@/components/NavMenu";
import WelcomeScreen from "@/components/WelcomeScreen";
export default function Home() {
	return (
		<div className={styles.Home}>
			<WelcomeScreen />
			<main>
			</main>
		</div>
	);
}
